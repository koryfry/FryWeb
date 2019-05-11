using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Reflection;
using Dapper;
using FryWeb.Data.Interfaces;

namespace FryWeb.Data
{
    public class DBContext : IDBContext
    {
        #region private properties

        private readonly string _connectionString;
        private IDbConnection _connection { get; set; }
        private IDbTransaction _transaction { get; set; }

        #endregion

        #region public properties

        public IDbConnection Connection
        {
            get
            {
                if (_connection == null || _connection.State != ConnectionState.Open)
                {
                    _connection = new SqlConnection(_connectionString);
                    _connection.Open();
                }

                return _connection;
            }
        }

        #endregion

        #region constructor

        public DBContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        #endregion

        #region public methods

        public T QueryFirst<T>(string query, object param = null, CommandType commandType = CommandType.Text, IDbTransaction transaction = null)
        {
            if (transaction == null)
            {
                return Transaction(_transaction => {
                    var result = Connection.QueryFirstOrDefault<T>(query, param, _transaction, commandType: commandType);
                    return result;
                });
            }
            else
            {
                return Connection.QueryFirstOrDefault<T>(query, param, transaction: transaction, commandType: commandType);
            }
        }

        public IEnumerable<T> Query<T>(string query, object param = null, CommandType commandType = CommandType.Text, IDbTransaction transaction = null)
        {
            if (transaction == null)
            {
                return Transaction(_transaction => {
                    var result = Connection.Query<T>(query, param, _transaction, commandType: commandType);
                    return result;
                });
            }
            else
            {
                return Connection.Query<T>(query, param, transaction: transaction, commandType: commandType);
            }
        }

        /// <summary>
        /// Execute multiple queries simultaneously
        /// https://github.com/StackExchange/Dapper#multiple-results
        /// </summary>
        public SqlMapper.GridReader QueryMultiple(string query, object param = null, Action<SqlMapper.GridReader> map = null, CommandType commandType = CommandType.Text, IDbTransaction transaction = null)
        {
            var gridReader = Connection.QueryMultiple(query, param, commandType: commandType, transaction: transaction);
            map?.Invoke(gridReader);
            return gridReader;
        }

        /// <summary>
        /// Map child entity to parent (1 to 1)
        /// http://dapper-tutorial.net/result-multi-mapping#example---query-multi-mapping-one-to-one
        /// </summary>
        public IEnumerable<T1> Query1To1<T1, T2>(string childProperty, string splitOn, string query, object param = null, CommandType commandType = CommandType.Text, IDbTransaction transaction = null)
        {
            /** create a mapping function */
            Func<T1, T2, T1> map = (T1 parent, T2 child) => {
                /** get the child object property */
                PropertyInfo prop = parent.GetType().GetProperty(childProperty, BindingFlags.Instance | BindingFlags.Public);
                if (prop != null && prop.CanWrite)
                {
                    prop.SetValue(parent, child);
                }

                /** return the parent object */
                return parent;
            };

            /** check for a provided transaction */
            if (transaction == null)
            {
                return Transaction(_transaction => {
                    var result = Connection.Query(query, map, param, _transaction, splitOn: splitOn, commandType: commandType);
                    return result;
                });
            }
            else
            {
                return Connection.Query(query, map, param, transaction, splitOn: splitOn, commandType: commandType);
            }
        }

        /// <summary>
        /// Map child entity to parent (1 to N)
        /// http://dapper-tutorial.net/result-multi-mapping#example---query-multi-mapping-one-to-many
        /// </summary>
        public IEnumerable<T1> Query1ToN<T1, T2>(string parentIDProperty, string childProperty, string splitOn, string query, object param = null, CommandType commandType = CommandType.Text, IDbTransaction transaction = null)
        {
            /** create a dictionary */
            var entityDictionary = new Dictionary<int, T1>();

            /** create a mapping function */
            Func<T1, T2, T1> map = (T1 parent, T2 child) => {
                /** get the child object property */
                int id = 0;
                PropertyInfo idProp = parent.GetType().GetProperty(parentIDProperty, BindingFlags.Instance | BindingFlags.Public);
                if (idProp != null && idProp.CanRead)
                {
                    id = (int)idProp.GetValue(parent);
                }

                /** get the child property */
                PropertyInfo prop = parent.GetType().GetProperty(childProperty, BindingFlags.Instance | BindingFlags.Public);

                /** try to get the parent from the dictionary */
                if (!entityDictionary.TryGetValue(id, out T1 parentEntity))
                {
                    /** set the parent entity */
                    parentEntity = parent;

                    /** get the child object property */
                    if (prop != null && prop.CanWrite)
                    {
                        /** create a list */
                        prop.SetValue(parentEntity, new List<T2>());
                    }

                    /** add the parent entity to the dictionary */
                    entityDictionary.Add(id, parentEntity);
                }

                /** add the child record */
                List<T2> children = (List<T2>)prop.GetValue(parentEntity);
                if (child != null) children.Add(child);

                /** return the parent object */
                return parentEntity;
            };

            /** check for a provided transaction */
            if (transaction == null)
            {
                return Transaction(_transaction => {
                    var result = Connection.Query(query, map, param, _transaction, splitOn: splitOn, commandType: commandType);
                    return result;
                });
            }
            else
            {
                return Connection.Query(query, map, param, transaction, splitOn: splitOn, commandType: commandType);
            }
        }

        public int Command(string sql, object param = null, CommandType commandType = CommandType.Text, IDbTransaction transaction = null)
        {
            if (transaction == null) return Transaction(_transaction => Connection.Execute(sql, param, _transaction, commandType: commandType));
            else return Connection.Execute(sql, param, transaction, commandType: commandType);
        }

        public IDbTransaction BeginTransaction()
        {
            if (_transaction == null || _transaction.Connection == null)
                _transaction = Connection.BeginTransaction();

            return _transaction;
        }

        public T Transaction<T>(Func<IDbTransaction, T> query)
        {
            using (var connection = Connection)
            {
                using (var transaction = BeginTransaction())
                {
                    try
                    {
                        var result = query(transaction);
                        transaction.Commit();

                        return result;
                    }
                    catch (Exception ex)
                    {
                        transaction.Rollback();
                        throw ex;
                    }
                }
            }
        }

        public void Commit()
        {
            try
            {
                _transaction.Commit();
                _transaction.Dispose();
                _transaction = null;
            }
            catch (Exception ex)
            {
                if (_transaction != null && _transaction.Connection != null)
                {
                    Rollback();
                }

                throw new NullReferenceException("Tried Commit on closed Transaction", ex);
            }
        }

        public void Rollback()
        {
            try
            {
                _transaction.Rollback();
                _transaction.Dispose();
                _transaction = null;
            }
            catch (Exception ex)
            {
                throw new NullReferenceException("Tried Rollback on closed Transaction", ex);
            }
        }

        #endregion

        #region disposal

        public void Dispose()
        {
            if (_transaction != null)
            {
                _transaction.Dispose();
                _transaction = null;
            }

            if (_connection != null && _connection.State != ConnectionState.Closed)
            {
                _connection.Close();
                _connection = null;
            }
        }

        ~DBContext()
        {
            Dispose();
        }

        #endregion
    }
}
