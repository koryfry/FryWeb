using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Kory.Tools.Contracts.BaseClasses
{
    public interface IRepository<T> : IDisposable
    {
        T Get(int id);
        
        IQueryable<T> GetAll();
        IQueryable<T> GetAll(string includeProperties);
        IQueryable<T> GetAll(Expression<Func<T, bool>> filter);
        IQueryable<T> GetAll(Func<IQueryable<T>, IOrderedQueryable<T>> orderBy);

        T Insert(T entity);

        T Update(T entity, int id);

        void Delete(int id);
        void Delete(T entity);
    }
}
