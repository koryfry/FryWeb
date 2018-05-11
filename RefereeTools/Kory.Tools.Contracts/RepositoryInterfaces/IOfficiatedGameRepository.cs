using System.Linq;
using Kory.Tools.Data.Entities.RefereeTools;
using Kory.Tools.Contracts.BaseClasses;

namespace Kory.Tools.Contracts.RepositoryInterfaces
{
    public interface IOfficiatedGameRepository : IRepository<OfficiatedGame>
    {
        /// <summary>
        /// Retrieve a list of officiated games for a specific Arena
        /// </summary>
        /// <param name="arenaKey"></param>
        /// <returns></returns>        
        IQueryable<OfficiatedGame> GetByArenaKey(int arenaKey);

        /// <summary>
        /// Retrieve a list of officiated games for a specific Age Group
        /// </summary>
        /// <param name="ageGroupKey"></param>
        /// <returns></returns>
        IQueryable<OfficiatedGame> GetByAgeGroupKey(int ageGroupKey);

        /// <summary>
        /// Retrieve a list of officiated games for a specific Official
        /// </summary>
        /// <param name="officialsKey"></param>
        /// <returns></returns>
        IQueryable<OfficiatedGame> GetByOfficialsKey(int officialsKey);
    }
}
