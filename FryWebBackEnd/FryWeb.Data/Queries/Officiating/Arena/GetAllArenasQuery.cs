using System.Collections.Generic;
using FryWeb.Data.BaseInterfaces;
using System.Data;
using DTO = FryWeb.Data.DTO;
using Dapper;

namespace FryWeb.Data.Queries.Arena
{
    public class GetAllArenasQuery
    {
        public List<DTO.Arena> Execute(IDBContext context, IDbTransaction transaction = null)
        {
            using (var connection = context.Connection)
            {
                var arenas = new List<DTO.Arena>();
                var result = connection.Query<DTO.Arena>("Officiating.GetAllArenas", commandType: CommandType.StoredProcedure);

                if (result != null) arenas.AddRange(result);
                return arenas;
            }
        }
    }
}
