using System.Data.Entity;
using Kory.Tools.Data.Entities.RefereeTools;

namespace Kory.Tools.Data.ModelBuilders
{
    public static class RefereeToolsModelBuilder
    {
        public static void Load(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Address>().ToTable("Address");
            modelBuilder.Entity<AddressType>().ToTable("AddressType");
            modelBuilder.Entity<AgeGroup>().ToTable("AgeGroup");
            modelBuilder.Entity<Arena>().ToTable("Arena");
            modelBuilder.Entity<Officials>().ToTable("Officials");
            modelBuilder.Entity<OfficiatedGame>().ToTable("OfficiatedGame");

            // Address Entity
            modelBuilder.Entity<Address>()
                .HasRequired(at => at.AddressType)
                .WithMany()
                .HasForeignKey(at => at.AddressTypeKey);

            // Arena Entity
            modelBuilder.Entity<Arena>()
                .HasRequired(a => a.Address)
                .WithMany()
                .HasForeignKey(a => a.AddressKey);

            // Officials Entity
            modelBuilder.Entity<Officials>()
                .HasRequired(a => a.Address)
                .WithMany()
                .HasForeignKey(a => a.AddressKey);

            // Officiated Game Entity
            modelBuilder.Entity<OfficiatedGame>()
                .HasRequired(ar => ar.Arena)
                .WithMany()
                .HasForeignKey(ar => ar.ArenaKey);

            modelBuilder.Entity<OfficiatedGame>()
                .HasRequired(ag => ag.AgeGroup)
                .WithMany()
                .HasForeignKey(ag => ag.AgeGroupKey);

            modelBuilder.Entity<OfficiatedGame>()
                .HasRequired(o => o.Official)
                .WithMany()
                .HasForeignKey(o => o.OfficialsKey);

            modelBuilder.Entity<OfficiatedGame>()
                .HasOptional(o => o.Partner1)
                .WithMany()
                .HasForeignKey(o => o.Partner1_OfficialsKey);

            modelBuilder.Entity<OfficiatedGame>()
                .HasOptional(o => o.Partner2)
                .WithMany()
                .HasForeignKey(o => o.Partner2_OfficialsKey);

            modelBuilder.Entity<OfficiatedGame>()
                .HasOptional(o => o.Partner3)
                .WithMany()
                .HasForeignKey(o => o.Partner3_OfficialsKey);
        }
    }
}
