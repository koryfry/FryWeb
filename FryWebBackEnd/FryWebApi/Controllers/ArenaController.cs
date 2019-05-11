using System.Collections.Generic;
using FryWeb.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace FryWeb.Api.Controllers
{
    public class ArenaController : ApiBaseController
    {
        private readonly IService _service;

        public ArenaController(IService service)
            : base(service)
        {
            _service = service;
        }

        // GET api/arenas
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "Griffs West", "Griffs Ice House" };
        }

        // GET api/values/5
        //[Route("api/arena/{id}")]
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "Walker Ice and Fitness";
        }
    }
}
