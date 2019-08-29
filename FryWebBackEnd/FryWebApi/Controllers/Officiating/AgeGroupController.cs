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

        [HttpGet]
        public ActionResult<IEnumerable<AgeGroup>> GetAgeGroups()
        {
            var ageGroups = _service.GetAgeGroups();
            return Ok(ageGroups);
        }

        [HttpGet("{ageGroupId}")]
        public ActionResult<AgeGroup> GetAgeGroup(int ageGroupId)
        {
            var ageGroup = _service.GetAgeGroupByID(ageGroupId);
            return Ok(ageGroup);
        }
    }
}
