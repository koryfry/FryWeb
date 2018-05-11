using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Kory.Tools.Contracts.BaseClasses;
using System.Data.Entity;
using System.Data;
using Kory.Tools.Data.DataProxies;
using System.Linq.Expressions;

namespace Kory.Tools.Data.Repository
{
    public abstract class RepositoryBase
    {
        public IRepositoryContext Context { get; protected set; }
    }
    
    public abstract class RepositoryBase<T> : RepositoryBase, IRepository<T> 
        where T : class, new()
    {
        private bool Disposed;
        private IEFDataProxy<T> DataProxy { get; set; }
        private string RepositoryName { get; set; }
        
        public RepositoryBase(IRepositoryContext context)
        {
            this.Context = context;
            this.RepositoryName = this.GetType().Name;
            this.DataProxy = EFDataProxy<T>.Initialize(context, RepositoryName);
        }
        
        //private C _entities = new C();

        //public C Context
        //{
        //    get { return _entities; }
        //    set { _entities = value; }
        //}

        #region Public Virtual Methods


        public virtual T Get(int id)
        {
            T instance = null;

            if (instance == null)
            {
                instance = DataProxy.Get(id);
            }

            return instance;
        }


        public virtual IQueryable<T> GetAll()
        {
            var values = DataProxy.GetAll();
            return values;
        }

        
        public virtual IQueryable<T> GetAll(string includeProprties)
        {
            var values = DataProxy.GetAll(includeProprties);
            return values;
        }


        public virtual IQueryable<T> GetAll(Expression<Func<T, bool>> filter)
        {
            var values = DataProxy.GetAll(filter);
            return values;
        }


        public virtual IQueryable<T> GetAll(Func<IQueryable<T>, IOrderedQueryable<T>> orderBy)
        {
            var values = DataProxy.GetAll(orderBy);
            return values;
        }


        public virtual T Insert(T entity)
        {
            T returnValue = DataProxy.Insert(entity);
            return returnValue;
        }


        public virtual T Update(T entity, int id)
        {
            var value = DataProxy.Update(entity);
            return value;
        }

        
        public virtual void Delete(int id)
        {
            DataProxy.Delete(id);
        }


        public virtual void Delete(T entity)
        {
            DataProxy.Delete(entity);
        }

        #endregion

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        protected virtual void Dispose(bool disposing)
        {
            if (Disposed != true)
            {
                if (disposing == true)
                {
                    if (DataProxy != null)
                    {
                        DataProxy.Dispose();
                    }

                    if (Context != null)
                    {
                        Context.Dispose();
                    }
                }

                Disposed = true;
            }
        }
    }
}