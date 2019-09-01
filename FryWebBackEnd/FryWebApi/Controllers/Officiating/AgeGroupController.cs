using System.Collections.Generic;
using FryWeb.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using FryWeb.Data.DTO;

namespace FryWeb.Api.Controllers
{
    public class AgeGroupController : ApiBaseController
    {
        private readonly IAgeGroupService _service;

        public AgeGroupController(IAgeGroupService service)
            : base(service)
        {
            _service = service;
        }

        #region HTTP GETS

        // GET api/ageGroups
        [HttpGet("getAllAgeGroups")]
        public ActionResult<List<AgeGroup>> GetAllAgeGroups()
        {
            var ageGroups = _service.GetAgeGroups();
            return Ok(ageGroups);
        }

        [HttpGet("getAgeGroupById/{ageGroupID}")]
        public ActionResult<AgeGroup> GetAgeGroupById(int ageGroupID)
        {
            var ageGroup = _service.GetAgeGroupByID(ageGroupID);
            return Ok(ageGroup);
        }

        #endregion
    }
}
