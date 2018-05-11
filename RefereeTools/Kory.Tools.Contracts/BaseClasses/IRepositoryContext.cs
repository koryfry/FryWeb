using System;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace Kory.Tools.Contracts.BaseClasses
{
    public interface IRepositoryContext : IObjectContextAdapter, IDisposable
    {
        string Name { get; set; }

        void Initialize(string nameOrConnectionString);

        Database Database { get; }

        DbEntityEntry Element(object entity);
    }
}
