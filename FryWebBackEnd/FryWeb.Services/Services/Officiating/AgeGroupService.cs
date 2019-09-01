using System;
using System.Collections.Generic;
using System.Text;
using FryWeb.Services.BaseServices;
using FryWeb.Services.Interfaces;
using FryWeb.Data.BaseInterfaces;
using FryWeb.Data.DTO;
using FryWeb.Data.Queries.AgeGroup;

namespace FryWeb.Services.Services
{
    public class AgeGroupService : Service, IAgeGroupService
    {
        public AgeGroupService(IDBContext context) 
            : base(context)
        {
            
        }

        public List<AgeGroup> GetAgeGroups()
        {
            var ageGroups = new GetAllAgeGroupsQuery().Execute(Context);
            return ageGroups;
        }

        public AgeGroup GetAgeGroupByID(int ageGroupID)
        {
            var ageGroup = new GetAgeGroupByIDQuery(ageGroupID).Execute(Context);
            return ageGroup;
        }
    }
}
