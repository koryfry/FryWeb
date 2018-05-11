using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace RefereeTools.MVC
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                "Default", //Route Name
                "{controller}/{action}/{id}", // URL with parameters
                new { controller = "Home", action = "Index", id = UrlParameter.Optional }, // Parameter Defaults
                new[] { "Kory.Tools.MVC.Controllers" }
            );

            routes.MapRoute(
                "Officiating", //Route Name
                "{controller}/{action}/{id}", // URL with parameters
                new { controller = "Home", action = "Index", id = UrlParameter.Optional }, // Parameter Defaults
                new[] { "Kory.Tools.MVC.Controllers" }
            );

            routes.MapRoute(
                "Shooting", //Route Name
                "{controller}/{action}/{id}", // URL with parameters
                new { controller = "Home", action = "Index", id = UrlParameter.Optional }, // Parameter Defaults
                new[] { "Kory.Tools.MVC.Controllers" }
            );
        }
    }
}