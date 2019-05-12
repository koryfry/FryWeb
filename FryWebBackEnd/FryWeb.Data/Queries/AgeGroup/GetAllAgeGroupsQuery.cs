using System.Collections.Generic;
using FryWeb.Data.BaseInterfaces;
using System.Data;
using System.Linq;

namespace FryWeb.Data.Queries.AgeGroup
{
    public class GetAllAgeGroupsQuery //: IQuery<DTO.AgeGroup>
    {
        public string Sql { get; set; }

        public GetAllAgeGroupsQuery()
        {
            Sql = "SELECT * FROM Officiating.AgeGroup";
        }

        public IEnumerable<DTO.AgeGroup> Execute(IDBContext context, IDbTransaction transaction = null)
        {
            var ageGroups = context.Query<DTO.AgeGroup>(Sql, transaction).ToList();
            return ageGroups;
        }
    }
}
