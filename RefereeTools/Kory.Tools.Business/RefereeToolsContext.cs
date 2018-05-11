using Kory.Tools.Data;
using Kory.Tools.Data.ModelBuilders;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace Kory.Tools.Data
{
    public class RefereeToolsContext : DbContext
    {
        static RefereeToolsContext()
        {
            Database.SetInitializer<RefereeToolsContext>(null);
        }

        public RefereeToolsContext() : base("Name=RefereeToolsContext")
        {

        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            RefereeToolsModelBuilder.Load(modelBuilder);
        }

        //public DbSet<Address> Address { get; set; }
        //public DbSet<AddressType> AddressType { get; set; }
        //public DbSet<AgeGroup> AgeGroups { get; set; }
        //public DbSet<Arena> Arenas { get; set; }
        //public DbSet<Officials> Officials { get; set; }
        //public DbSet<OfficiatedGame> OfficiatedGame { get; set; }
    }
}
