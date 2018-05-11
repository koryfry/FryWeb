using Kory.Tools.Contracts.BaseClasses;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.Entity;
using System.Data.Objects;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;

namespace Kory.Tools.Data.DataProxies
{
    internal class EFDataProxy
    {
        protected IRepositoryContext Context;
    }

    internal class EFDataProxy<T> : EFDataProxy, IEFDataProxy<T>
        where T : class, new()
    {
        private bool Disposed = false;

        private EFDataProxy(IRepositoryContext context)
        {
            this.Context = context;
        }

        #region Private Properties

        private DbSet<T> Set
        {
            get { return ((DbContext)Context).Set<T>(); }
        }

        #endregion

        
        #region Private Methods

        private T AttachEntity(T entity)
        {
            var returnVal = entity;

            if (entity != null)
            {
                ObjectStateManager stateManager = Context.ObjectContext.ObjectStateManager;

                if (stateManager.GetObjectStateEntry(entity).State == EntityState.Detached)
                {
                    Set.Attach(entity);
                }
            }

            return returnVal;
        }

        private void AttachEntities(IEnumerable<T> entities)
        {
            foreach (T entity in entities)
            {
                AttachEntity(entity);
            }
        }

        #endregion


        #region Public Methods


        public virtual T Get(int id)
        {
            return Set.Find(id);
        }


        public virtual IQueryable<T> GetAll()
        {
            return Set.AsQueryable();
        }


        public virtual IQueryable<T> GetAll(string includeProperties)
        {
            var query = Set.AsQueryable();

            foreach (var includeProperty in includeProperties.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries))
            {
                query = query.Include(includeProperty);
            }

            return query;
        }


        public virtual IQueryable<T> GetAll(Expression<Func<T, bool>> filter)
        {
            var query = Set.AsQueryable();

            if (filter != null)
            {
                query = query.Where(filter);
            }

            return query;
        }


        public virtual IQueryable<T> GetAll(Func<IQueryable<T>, IOrderedQueryable<T>> orderBy)
        {
            var query = Set.AsQueryable();

            var orderedQuery = ((orderBy != null) ? orderBy(query) : null);

            return ((orderBy != null) ? orderedQuery : query);
        }


        public T Insert(T entity)
        {
            T returnVal = null;

            if (entity != null)
            {
                returnVal = Set.Add(entity);
            }

            return returnVal;
        }


        public T Update(T entity)
        {
            T returnVal = null;

            if (entity != null)
            {
                returnVal = Set.Attach(entity);
                Context.Element((object)entity).State = EntityState.Modified;
            }

            return returnVal;
        }


        public virtual void Delete(int id)
        {
            T entity = Set.Find(id);

            if (entity != null)
            {
                AttachEntity(entity);
                Set.Remove(entity);
            }
        }


        public virtual void Delete(T entity)
        {
            if (entity != null)
            {
                AttachEntity(entity);
                Set.Remove(entity);
            }
        }

        #endregion


        #region Public Static Methods
        
        public static EFDataProxy<T> Initialize(IRepositoryContext context, string sourceName)
        {
            return new EFDataProxy<T>(context) { };
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
                    Context.Dispose();
                }

                Disposed = true;
            }
        }
    }
}
