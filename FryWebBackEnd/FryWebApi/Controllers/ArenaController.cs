using System.Collections.Generic;
using FryWeb.Services.BaseInterfaces;
using Microsoft.AspNetCore.Mvc;
using FryWeb.Services.Interfaces;
using FryWeb.Data.DTO;

namespace FryWeb.Api.Controllers
{
    public class ArenaController : ApiBaseController
    {
        private readonly IArenaService _service;

        public ArenaController(IArenaService service)
            : base(service)
        {
            _service = service;
        }

        // GET api/arenas
        [HttpGet("getAllArenas")]
        public ActionResult<List<Arena>> GetAllArenas()
        {
            var arenas = _service.GetAllArenas();
            return arenas;
            //return new string[] { "Griffs West", "Griffs Ice House" };
        }

        // GET api/values/5
        //[Route("api/arena/{id}")]
        [HttpGet("getArenaById/{arenaID}")]
        public ActionResult<Arena> GetArenaByID(int arenaID)
        {
            var arena = _service.GetArenaByID(arenaID);
            return arena;
        }
    }
}
