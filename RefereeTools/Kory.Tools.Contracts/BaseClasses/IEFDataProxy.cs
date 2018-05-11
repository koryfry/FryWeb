using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;

namespace Kory.Tools.Contracts.BaseClasses
{
    public interface IEFDataProxy<T> : IDisposable
    {
        T Get(int id);
        IQueryable<T> GetAll();
        IQueryable<T> GetAll(string includeProperties);
        IQueryable<T> GetAll(Expression<Func<T, bool>> filter);
        IQueryable<T> GetAll(Func<IQueryable<T>, IOrderedQueryable<T>> orderBy);

        T Insert(T entity);

        T Update(T entity);

        void Delete(int id);
        void Delete(T entity);
    }
}
