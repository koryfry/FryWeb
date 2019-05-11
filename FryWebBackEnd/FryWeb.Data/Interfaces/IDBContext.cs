using System;
using System.Collections.Generic;
using System.Data;
using Dapper;

namespace FryWeb.Data.Interfaces
{
    public interface IDBContext : IDisposable
    {
        IDbConnection Connection { get; }

        T QueryFirst<T>(string query, object param = null, CommandType commandType = CommandType.Text, IDbTransaction transaction = null);
        IEnumerable<T> Query<T>(string query, object param = null, CommandType commandType = CommandType.Text, IDbTransaction transaction = null);
        SqlMapper.GridReader QueryMultiple(string query, object param = null, Action<SqlMapper.GridReader> map = null, CommandType commandType = CommandType.Text, IDbTransaction transaction = null);
        IEnumerable<T1> Query1To1<T1, T2>(string childProperty, string splitOn, string query, object param = null, CommandType commandType = CommandType.Text, IDbTransaction transaction = null);
        IEnumerable<T1> Query1ToN<T1, T2>(string parentIDProperty, string childProperty, string splitOn, string query, object param = null, CommandType commandType = CommandType.Text, IDbTransaction transaction = null);
        int Command(string sql, object param = null, CommandType commandType = CommandType.Text, IDbTransaction transaction = null);
        T Transaction<T>(Func<IDbTransaction, T> query);
        IDbTransaction BeginTransaction();
        void Commit();
        void Rollback();
    }
}
