using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Kory.Tools.Data.Entities.RefereeTools;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace Kory.Tools.Data
{
    public class RefereeToolsContext : DbContext
    {
        public DbSet<Address> Address { get; set; }
        public DbSet<AddressType> AddressType { get; set; }
        public DbSet<AgeGroup> AgeGroups { get; set; }
        public DbSet<Arena> Arenas { get; set; }
        public DbSet<Officials> Officials { get; set; }
        public DbSet<OfficiatedGame> OfficiatedGame { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }

    }
}
