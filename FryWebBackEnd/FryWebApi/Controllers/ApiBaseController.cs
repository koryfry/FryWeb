using FryWeb.Services.BaseInterfaces;
using Microsoft.AspNetCore.Mvc;

namespace FryWeb.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public abstract class ApiBaseController : ControllerBase
    {
        private readonly IService _service;

        public ApiBaseController(IService service)
        {
            _service = service;
        }
    }
}
