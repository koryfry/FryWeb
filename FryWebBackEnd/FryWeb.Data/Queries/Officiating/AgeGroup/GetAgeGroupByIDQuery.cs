using System.Collections.Generic;
using FryWeb.Data.BaseInterfaces;
using System.Data;
using Dapper;

namespace FryWeb.Data.Queries.AgeGroup
{
    public class GetAgeGroupByIDQuery
    {
        private int _ageGroupID { get; set; }

        public GetAgeGroupByIDQuery(int ageGroupID)
        {
            _ageGroupID = ageGroupID;
        }

        public DTO.AgeGroup Execute(IDBContext context, IDbTransaction transaction = null)
        {
            using (var connection = context.Connection)
            {
                var ageGroup = new DTO.AgeGroup();
                DynamicParameters p = new DynamicParameters();

                p.Add("@ageGroupID", _ageGroupID);
                ageGroup = connection.QueryFirstOrDefault<DTO.AgeGroup>("Officiating.GetAgeGroupByID", p, commandType: CommandType.StoredProcedure);
                
                return ageGroup;
            }
        }
    }
}
