using System;
using System.Collections.Generic;
using FryWeb.Data.BaseInterfaces;
using System.Data;
using DTO = FryWeb.Data.DTO;
using Dapper;

namespace FryWeb.Data.Commands.Arena
{
    public class InsertOrUpdateArenaCommand
    {
        private DTO.Arena _arena { get; set; }

        public InsertOrUpdateArenaCommand(DTO.Arena arena)
        {
            _arena = arena;
        }

        public DTO.Arena Execute(IDBContext context, IDbTransaction transaction = null)
        {
            using (var connection = context.Connection)
            {
                DynamicParameters p = new DynamicParameters();

                p.Add("@arenaID", _arena.ID);
                p.Add("@arenaName", _arena.Name);
                p.Add("@address", _arena.Address);
                p.Add("@city", _arena.City);
                p.Add("@state", _arena.State);
                p.Add("@zipCode", _arena.ZipCode);
                p.Add("@newArenaID", DbType.Int32, direction: ParameterDirection.Output);
                
                var arena = connection.QueryFirstOrDefault<DTO.Arena>("Officiating.InsertOrUpdateArena", p, commandType: CommandType.StoredProcedure);
                return arena;
            }
        }
    }
}
