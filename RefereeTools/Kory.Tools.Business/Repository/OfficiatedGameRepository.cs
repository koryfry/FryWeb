using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using Kory.Tools.Contracts.RepositoryInterfaces;
using Kory.Tools.Data.Entities.RefereeTools;
using Kory.Tools.Contracts.BaseClasses;

namespace Kory.Tools.Data.Repository
{
    public class OfficiatedGameRepository : RepositoryBase<OfficiatedGame>, IOfficiatedGameRepository
    {
        public OfficiatedGameRepository(IRepositoryContext context): base(context)
        {
        }

        public IQueryable<OfficiatedGame> GetByArenaKey(int arenaKey)
        {
            return (GetAll(og => og.ArenaKey == arenaKey)
                .Include(og => og.Arena)
                .Include(og => og.AgeGroup)
                .Include(og => og.Official)
                .Include(og => og.Partner1)
                .Include(og => og.Partner2)
                .Include(og => og.Partner3)).Distinct();
        }

        public IQueryable<OfficiatedGame> GetByAgeGroupKey(int ageGroupKey)
        {
            return (GetAll(og => og.AgeGroupKey == ageGroupKey)
                .Include(og => og.Arena)
                .Include(og => og.AgeGroup)
                .Include(og => og.Official)
                .Include(og => og.Partner1)
                .Include(og => og.Partner2)
                .Include(og => og.Partner3)).Distinct();
        }

        public IQueryable<OfficiatedGame> GetByOfficialsKey(int officialsKey)
        {
            return (GetAll(og => og.OfficialsKey == officialsKey)
                .Include(og => og.Arena)
                .Include(og => og.AgeGroup)
                .Include(og => og.Official)
                .Include(og => og.Partner1)
                .Include(og => og.Partner2)
                .Include(og => og.Partner3)).Distinct();
        }
    }
}
