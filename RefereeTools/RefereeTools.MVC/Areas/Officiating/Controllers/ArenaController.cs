using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Kory.Tools.Data.RefereeTools;
//using Kory.Tools.Business.Repository;
using Kory.Tools.BR.Officiating;

namespace Kory.Tools.MVC.Areas.Officiating.Controllers
{   
    public class ArenaController : Controller
    {	
        //private readonly ArenaService _arenaService;

        //// If you are using Dependency Injection, you can delete the following constructor
        //public ArenaController() : this(new ArenaService())
        //{
        //}

        //public ArenaController(ArenaService arenaService)
        //{
        //    this._arenaService = arenaService;
        //}

        ////
        //// GET: /Arena/

        //public ViewResult Index()
        //{
        //    return View(_arenaService.GetArenas());
        //}


        //public ViewResult Details(int id)
        //{
        //    //return View("_Details", _arenaService.GetArena(id));
        //    return View(_arenaService.GetArena(id));
        //}

        ////public JsonResult Details(int id)
        ////{
        ////    return Json(_arenaService.GetArena(id), JsonRequestBehavior.AllowGet);
        ////}

        ////
        //// GET: /Arena/Create

        //public ActionResult Create()
        //{
        //    var arena = _arenaService.CreateDefaultArena();
        //    return View(arena);
        //} 

        ////
        //// POST: /Arena/Create

        //[HttpPost]
        //public ActionResult Create(Arena arena)
        //{
        //    bool isValidArena = false;

        //    if (ModelState.IsValid) 
        //    {
        //        isValidArena = _arenaService.ValidateArenaName(arena);

        //        if (arena.IsValidArena)
        //        {
        //            var result = _arenaService.SubmitArena(arena);

        //            if (result.ModelCode == 1)
        //            {
        //                return arena.IsSubmitted ? RedirectToAction("Index") : RedirectToAction("Edit", new { id = arena.ArenaKey });
        //            }

        //            else
        //            {
        //                ViewBag.Message = "Arena already exists, please choose a different name";
        //                return View(arena);
        //            }
        //        }
                
        //        else 
        //        {
        //            ViewBag.Message = "Arena already exists, please choose a different name";
        //            return View(arena);
        //        }
        //    } 
            
        //    return View(arena);
        //}
        
        ////
        //// GET: /Arena/Edit/5
 
        //public ActionResult Edit(int id)
        //{
        //     return View(_arenaService.GetArena(id));
        //}

        ////
        //// POST: /Arena/Edit/5

        //[HttpPost]
        //public ActionResult Edit(Arena arena)
        //{
        //    bool isValidArena;

        //    if (ModelState.IsValid)
        //    {
        //        isValidArena = _arenaService.ValidateArenaName(arena);

        //        if (arena.IsValidArena)
        //        {
        //            var result = _arenaService.SubmitArena(arena);

        //            if (result.ModelCode == 1)
        //            {
        //                return arena.IsSubmitted ? RedirectToAction("Index") : RedirectToAction("Edit", new { id = arena.ArenaKey });
        //            }
        //        }

        //        else
        //        {
        //            return View(arena);
        //        }
        //    }

        //    return View(arena);
        //}

        ////
        //// GET: /Arena/Delete/5
 
        //public ActionResult Delete(int id)
        //{
        //    var arena = _arenaService.GetArena(id);

        //    return View(arena);
        //}

        ////
        //// POST: /Arena/Delete/5

        //[HttpPost, ActionName("Delete")]
        //public ActionResult DeleteConfirmed(int id)
        //{
        //    _arenaService.DeleteArena(id);

        //    return RedirectToAction("Index");
        //}

        //public JsonResult FillIndex()
        //{
        //    return Json(_arenaService.GetArenas().ToList(), JsonRequestBehavior.AllowGet);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing) {
        //        _arenaService.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}
    }
}

