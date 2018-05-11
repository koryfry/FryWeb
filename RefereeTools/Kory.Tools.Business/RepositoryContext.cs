using Kory.Tools.Contracts.BaseClasses;
using System;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace Kory.Tools.Data
{
    public class RepositoryContext : DbContext, IRepositoryContext
    {
        private bool _disposed = false;
        public string Name { get; set; }

        public RepositoryContext() : base("default")
        {
            Initialize("default");
        }

        public RepositoryContext(string nameOrConnectionSting) : base(nameOrConnectionSting)
        {
            Initialize(nameOrConnectionSting);
        }

        public void Initialize(string connectionString)
        {
            Configuration.AutoDetectChangesEnabled = true;
            Configuration.ProxyCreationEnabled = false;
            Configuration.LazyLoadingEnabled = false;

            this.Name = connectionString;
        }

        public DbEntityEntry Element(object entity)
        {
            return this.Entry(entity);
        }

        protected override void Dispose(bool disposing)
        {
            base.Dispose(disposing);

            if (_disposed != true)
            {
                _disposed = true;
            }
        }
    }
}
