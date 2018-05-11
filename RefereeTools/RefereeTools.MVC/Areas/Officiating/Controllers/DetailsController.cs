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
    public class DetailsController : Controller
    {
        //private readonly DetailsService _detailsService;

        //// If you are using Dependency Injection, you can delete the following constructor
        //public DetailsController() : this(new DetailsService())
        //{
        //}

        //public DetailsController(DetailsService detailsService)
        //{
        //    this._detailsService = detailsService;
        //}

        ////
        //// GET: /Details/

        //public ViewResult Index()
        //{
        //    return View(_detailsService.GetDetails());
        //}

        ////
        //// GET: /Details/Details/5

        //public ViewResult Details(int id, DateTime gameDate, DateTime gameTime)
        //{
        //    return View(_detailsService.GetDetail(id));
        //}

        ////
        //// GET: /Details/Create

        //public ActionResult Create()
        //{
        //    var detail = _detailsService.CreateDefaultDetail();

        //    ArenaService arenaService = new ArenaService();

        //    ViewBag.Arenas = new SelectList(arenaService.GetArenas().OrderBy(a => a.ArenaName), "ArenaName");

        //    return View(detail);
        //} 

        ////
        //// POST: /Details/Create

        //[HttpPost]
        //public ActionResult Create(GameDetails details)
        //{
        //    if (ModelState.IsValid) 
        //    {
        //        _detailsService.SubmitDetail(details);
        //        return RedirectToAction("Index");
        //    } 
            
        //    else 
        //    {
        //        return View(details);
        //    }
        //}
        
        ////
        //// GET: /Details/Edit/5

        //public ActionResult Edit(int id)
        //{
        //    return View(_detailsService.GetDetail(id));
        //}

        ////
        //// POST: /Details/Edit/5

        //[HttpPost]
        //public ActionResult Edit(GameDetails details)
        //{
        //    if (ModelState.IsValid) 
        //    {
        //        _detailsService.SubmitDetail(details);
        //        return RedirectToAction("Index");
        //    } 
            
        //    else 
        //    {
        //        return View(details);
        //    }
        //}

        ////
        //// GET: /Details/Delete/5

        //public ActionResult Delete(int id)
        //{
        //    var detail = _detailsService.GetDetail(id);

        //    return View(detail);
        //}

        ////
        //// POST: /Details/Delete/5

        //[HttpPost, ActionName("Delete")]
        //public ActionResult DeleteConfirmed(int id)
        //{
        //    _detailsService.DeleteDetail(id);

        //    return RedirectToAction("Index");
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing) {
        //        _detailsService.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        //public JsonResult FillIndex()
        //{
        //    return Json(_detailsService.GetDetails().ToList(), JsonRequestBehavior.AllowGet);
        //}
    }
}

