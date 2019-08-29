using System.Collections.Generic;
using FryWeb.Data.BaseInterfaces;
using System.Data;
using Dapper;

namespace FryWeb.Data.Queries.Application
{
    public class GetApplicationIconsQuery
    {
        public List<DTO.Icon> Execute(IDBContext context, IDbTransaction transaction = null)
        {
            using (var connection = context.Connection)
            {
                var appIcons = new List<DTO.Icon>();
                var result = connection.Query<DTO.Icon>("Application.GetApplicationIcons", commandType: CommandType.StoredProcedure);

                if (result != null) appIcons.AddRange(result);
                return appIcons;
            }
        }
    }
}
