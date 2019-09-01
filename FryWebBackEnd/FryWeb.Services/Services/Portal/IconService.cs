using System.Collections.Generic;
using FryWeb.Services.BaseServices;
using FryWeb.Services.Interfaces;
using FryWeb.Data.BaseInterfaces;
using FryWeb.Data.DTO;
using FryWeb.Data.Queries.Portal;

namespace FryWeb.Services.Services
{
    public class IconService : Service, IIconService
    {
        public IconService(IDBContext context)
            : base(context)
        {

        }

        public List<Icon> GetPortalIcons()
        {
            var applicationIcons = new GetPortalIconsQuery().Execute(Context);
            return applicationIcons;
        }
    }
}
