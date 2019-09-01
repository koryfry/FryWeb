using System.Collections.Generic;
using FryWeb.Data.BaseInterfaces;
using System.Data;
using System.Linq;
using Dapper;

namespace FryWeb.Data.Queries.AgeGroup
{
    public class GetAllAgeGroupsQuery
    {
        public List<DTO.AgeGroup> Execute(IDBContext context, IDbTransaction transaction = null)
        {
            using (var connection = context.Connection)
            {
                var ageGroups = new List<DTO.AgeGroup>();
                var result = connection.Query<DTO.AgeGroup>("Officiating.GetAllAgeGroups", commandType: CommandType.StoredProcedure);

                if (result != null) ageGroups.AddRange(result);
                return ageGroups;
            }
        }
    }
}
