using System;
using System.Collections.Generic;
using System.Text;
using FryWeb.Services.BaseInterfaces;
using DTO = FryWeb.Data.DTO;

namespace FryWeb.Services.Interfaces
{
    public interface IAgeGroupService : IService
    {
        List<DTO.AgeGroup> GetAgeGroups();
        DTO.AgeGroup GetAgeGroupByID(int ageGroupID);
    }
}
