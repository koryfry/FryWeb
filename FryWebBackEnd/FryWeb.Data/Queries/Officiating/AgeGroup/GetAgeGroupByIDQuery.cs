using System.Collections.Generic;
using FryWeb.Data.BaseInterfaces;
using System.Data;

namespace FryWeb.Data.Queries.AgeGroup
{
    public class GetAgeGroupByIDQuery
    {
        public string Sql { get; set; }
        private int _ageGroupID { get; set; }

        public GetAgeGroupByIDQuery(int ageGroupID)
        {
            _ageGroupID = ageGroupID;

            Sql = "SELECT * FROM Officiating.AgeGroup WHERE AgeGroupID = @AgeGroupID";
        }

        public DTO.AgeGroup Execute(IDBContext context, IDbTransaction transaction = null)
        {
            var param = new { AgeGroupID = _ageGroupID };

            var ageGroup = context.QueryFirst<DTO.AgeGroup>(Sql, param, commandType: CommandType.Text, transaction: transaction);
            return ageGroup;
        }
    }
}
