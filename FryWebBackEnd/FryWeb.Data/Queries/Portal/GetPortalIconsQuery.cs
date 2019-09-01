using System.Collections.Generic;
using FryWeb.Data.BaseInterfaces;
using System.Data;
using Dapper;

namespace FryWeb.Data.Queries.Portal
{
    public class GetPortalIconsQuery
    {
        public List<DTO.Icon> Execute(IDBContext context, IDbTransaction transaction = null)
        {
            using (var connection = context.Connection)
            {
                var icons = new List<DTO.Icon>();
                var result = connection.Query<DTO.Icon>("Portal.GetIcons", commandType: CommandType.StoredProcedure);

                if (result != null) icons.AddRange(result);
                return icons;
            }
        }
    }
}
