using System;
using System.Collections.Generic;
using System.Text;
using FryWeb.Services.BaseInterfaces;
using DTO = FryWeb.Data.DTO;

namespace FryWeb.Services.Interfaces
{
    public interface IArenaService : IService
    {
        List<DTO.Arena> GetAllArenas();
        DTO.Arena GetArenaByID(int arenaID);
        IEnumerable<DTO.Arena> InsertOrUpdateArena(DTO.Arena arena);
    }
}
