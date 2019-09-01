using System.Collections.Generic;
using FryWeb.Services.BaseInterfaces;
using DTO = FryWeb.Data.DTO;

namespace FryWeb.Services.Interfaces
{
    public interface IIconService : IService
    {
        List<DTO.Icon> GetPortalIcons();
    }
}
