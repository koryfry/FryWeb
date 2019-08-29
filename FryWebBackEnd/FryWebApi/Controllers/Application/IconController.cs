using System.Collections.Generic;
using FryWeb.Services.BaseInterfaces;
using Microsoft.AspNetCore.Mvc;
using FryWeb.Services.Interfaces;
using FryWeb.Data.DTO;

namespace FryWeb.Api.Controllers
{
    public class IconController : ApiBaseController
    {
        private readonly IIconService _service;

        public IconController(IIconService service)
            : base(service)
        {
            _service = service;
        }

        #region HTTP GETS

        // GET api/icon
        [HttpGet("getApplicationIcons")]
        public ActionResult<List<Icon>> GetApplicationIcons()
        {
            var applicationIcons = _service.GetApplicationIcons();
            return applicationIcons;
        }

        #endregion
    }
}
