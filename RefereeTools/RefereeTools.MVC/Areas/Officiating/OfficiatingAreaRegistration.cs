using System.Web.Mvc;

namespace Kory.Tools.MVC.Areas.Officiating
{
    public class OfficiatingAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "Officiating";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "Officiating_default",
                "Officiating/{controller}/{action}/{id}",
                new {Controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
