using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Kory.Tools.MVC.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Message = "Welcome to Kory's Web Tools Application";

            return View();
        }

        public ActionResult About()
        {
            return View();
        }
    }
}
