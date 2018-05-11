using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Kory.Tools.MVC.Areas.Officiating.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Officiating/Home

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            return View();
        }
    }
}
