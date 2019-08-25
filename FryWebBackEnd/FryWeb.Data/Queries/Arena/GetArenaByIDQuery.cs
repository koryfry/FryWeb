using System;
using System.Collections.Generic;
using FryWeb.Data.BaseInterfaces;
using System.Data;
using DTO = FryWeb.Data.DTO;
using Dapper;

namespace FryWeb.Data.Queries.Arena
{
    public class GetArenaByIDQuery
    {
        private int _arenaID { get; set; }

        public GetArenaByIDQuery(int arenaID)
        {
            _arenaID = arenaID;
        }

        public DTO.Arena Execute(IDBContext context, IDbTransaction transaction = null)
        {
            using (var connection = context.Connection)
            {
                var arena = new DTO.Arena();
                DynamicParameters p = new DynamicParameters();

                p.Add("@arenaID", _arenaID);
                arena = connection.QueryFirstOrDefault<DTO.Arena>("Officiating.GetArenaByID", p, commandType: CommandType.StoredProcedure);

                return arena;
            }
        }
    }
}
