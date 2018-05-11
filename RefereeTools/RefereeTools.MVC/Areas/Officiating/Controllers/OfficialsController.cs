using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Kory.Tools.Data.RefereeTools;
//using Kory.Tools.Data.Repository;
using Kory.Tools.BR.Officiating;

namespace Kory.Tools.MVC.Areas.Officiating.Controllers
{   
    public class OfficialsController : Controller
    {
        //private readonly OfficialsService _officialsService;

        //// If you are using Dependency Injection, you can delete the following constructor
        //public OfficialsController() : this(new OfficialsService())
        //{

        //}

        //public OfficialsController(OfficialsService officialsService)
        //{
        //    this._officialsService = officialsService;
        //}

        ////
        //// GET: /Officials/

        //public ViewResult Index()
        //{
        //    return View(_officialsService.GetOfficials());
        //}

        ////
        //// GET: /Officials/Details/5

        //public ViewResult Details(int id)
        //{
        //    return View(_officialsService.GetOfficial(id));
        //}

        ////
        //// GET: /Officials/Create

        //public ActionResult Create()
        //{
        //    var official = _officialsService.CreateDefaultOfficial();
        //    return View(official);
        //} 

        ////
        //// POST: /Officials/Create

        //[HttpPost]
        //public ActionResult Create(Officials official)
        //{
        //    bool isValidOfficial = false;

        //    if (ModelState.IsValid)
        //    {
        //        isValidOfficial = _officialsService.ValidateOfficialName(official);

        //        if (official.IsValidOfficial)
        //        {
        //            var result = _officialsService.SubmitOfficial(official);

        //            if (result.ModelCode == 1)
        //            {
        //                return official.IsSubmitted ? RedirectToAction("Index") : RedirectToAction("Edit", new { id = official.OfficialsKey });
        //            }

        //            else
        //            {
        //                ViewBag.Message = "Official already exists, please choose a different name";
        //                return View(official);
        //            }
        //        }

        //        else
        //        {
        //            ViewBag.Message = "Official already exists, please choose a different name";
        //            return View(official);
        //        }
        //    }

        //    return View(official);
        //}
        
        ////
        //// GET: /Officials/Edit/5
 
        //public ActionResult Edit(int id)
        //{
        //    return View(_officialsService.GetOfficial(id));
        //}

        ////
        //// POST: /Officials/Edit/5

        //[HttpPost]
        //public ActionResult Edit(Officials official)
        //{
        //    bool isValidOfficial = true;

        //    if (ModelState.IsValid)
        //    {
        //        official.IsValidOfficial = true;
        //        //isValidOfficial = _officialsService.ValidateOfficialName(official);

        //        if (official.IsValidOfficial)
        //        {
        //            var result = _officialsService.SubmitOfficial(official);

        //            if (result.ModelCode == 1)
        //            {
        //                return official.IsSubmitted ? RedirectToAction("Index") : RedirectToAction("Edit", new { id = official.OfficialsKey });
        //            }
        //            else
        //            {
        //                ViewBag.Message = "Official already exists, please choose a different name";
        //                return View(official);
        //            }
        //        }

        //        else
        //        {
        //            ViewBag.Message = "Official already exists, please choose a different name";
        //            return View(official);
        //        }
        //    }

        //    return View(official);
        //}

        ////
        //// GET: /Officials/Delete/5
 
        //public ActionResult Delete(int id)
        //{
        //    var official = _officialsService.GetOfficial(id);

        //    return View(official);
        //}

        ////
        //// POST: /Officials/Delete/5

        //[HttpPost, ActionName("Delete")]
        //public ActionResult DeleteConfirmed(int id)
        //{
        //    _officialsService.DeleteOfficial(id);

        //    return RedirectToAction("Index");
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing) {
        //        _officialsService.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        //public JsonResult FillIndex()
        //{
        //    return Json(_officialsService.GetOfficials().ToList(), JsonRequestBehavior.AllowGet);
        //}

        //public JsonResult EditOfficial(int id)
        //{
        //    return Json(_officialsService.GetOfficial(id), JsonRequestBehavior.AllowGet);
        //}
    }
}

