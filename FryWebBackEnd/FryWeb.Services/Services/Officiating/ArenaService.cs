using System;
using System.Collections.Generic;
using System.Text;
using FryWeb.Services.BaseServices;
using FryWeb.Services.Interfaces;
using FryWeb.Data.BaseInterfaces;
using FryWeb.Data.DTO;
using FryWeb.Data.Queries.Arena;
using FryWeb.Data.Commands.Arena;

namespace FryWeb.Services.Services
{
    public class ArenaService : Service, IArenaService
    {
        public ArenaService(IDBContext context)
            : base(context)
        {

        }

        public List<Arena> GetAllArenas()
        {
            var arenas = new GetAllArenasQuery().Execute(Context);
            return arenas;
        }

        public Arena GetArenaByID(int arenaID)
        {
            var arena = new GetArenaByIDQuery(arenaID).Execute(Context);
            return arena;
        }

        public Arena InsertOrUpdateArena(Arena arena)
        {
            var a = new InsertOrUpdateArenaCommand(arena).Execute(Context);
            return a;
        }
    }
}
