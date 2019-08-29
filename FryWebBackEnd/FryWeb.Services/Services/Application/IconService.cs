using System.Collections.Generic;
using FryWeb.Services.BaseServices;
using FryWeb.Services.Interfaces;
using FryWeb.Data.BaseInterfaces;
using FryWeb.Data.DTO;
using FryWeb.Data.Queries.Application;

namespace FryWeb.Services.Services
{
    public class IconService : Service, IIconService
    {
        public IconService(IDBContext context)
            : base(context)
        {

        }

        public List<Icon> GetApplicationIcons()
        {
            var applicationIcons = new GetApplicationIconsQuery().Execute(Context);
            return applicationIcons;
        }
    }
}
