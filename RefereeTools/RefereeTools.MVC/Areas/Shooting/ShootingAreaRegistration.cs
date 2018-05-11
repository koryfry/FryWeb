using System.Web.Mvc;

namespace Kory.Tools.MVC.Areas.Shooting
{
    public class ShootingAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "Shooting";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.MapRoute(
                "Shooting_default",
                "Shooting/{controller}/{action}/{id}",
                new { Controller = "Home", action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}
