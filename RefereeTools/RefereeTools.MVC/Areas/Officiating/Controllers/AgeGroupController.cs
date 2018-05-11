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
    public class AgeGroupController : Controller
    {
        //private readonly AgeGroupService _ageGroupService;

        //// If you are using Dependency Injection, you can delete the following constructor
        //public AgeGroupController() : this(new AgeGroupService())
        //{
        //}

        //public AgeGroupController(AgeGroupService ageGroupService)
        //{
        //    this._ageGroupService = ageGroupService;
        //}

        ////
        //// GET: /AgeGroup/

        //public ViewResult Index()
        //{
        //    return View(_ageGroupService.GetAgeGroups());
        //}

        ////
        //// GET: /AgeGroup/Details/5

        //public ViewResult Details(int id)
        //{
        //    return View(_ageGroupService.GetAgeGroup(id));
        //}

        ////
        //// GET: /AgeGroup/Create

        //public ActionResult Create()
        //{
        //    var ageGroup = _ageGroupService.CreateDefaultAgeGroup();

        //    return View(ageGroup);
        //} 

        ////
        //// POST: /AgeGroup/Create

        //[HttpPost]
        //public ActionResult Create(AgeGroup ageGroup)
        //{
        //    bool IsValidAgeGroupNameAndTier = false;

        //    if (ModelState.IsValid)
        //    {
        //        IsValidAgeGroupNameAndTier = _ageGroupService.ValidateAgeGroupNameAndTier(ageGroup);

        //        if (ageGroup.IsValidAgeGroupAndTier)
        //        {
        //            var result = _ageGroupService.SubmitAgeGroup(ageGroup);

        //            if (result.ModelCode == 1)
        //            {
        //                return ageGroup.IsSubmitted ? RedirectToAction("Index") : RedirectToAction("Edit", new { id = ageGroup.AgeGroupKey });
        //            }

        //            else
        //            {
        //                ViewBag.Message = "Age Group Name and Tier already exists, please choose a different group name and tier";
        //                return View(ageGroup);
        //            }
        //        }

        //        else
        //        {
        //            ViewBag.Message = "Age Group Name and Tier already exists, please choose a different group name and tier";
        //            return View(ageGroup);
        //        }
        //    }

        //    return View(ageGroup);
        //}
        
        ////
        //// GET: /AgeGroup/Edit/5
 
        //public ActionResult Edit(int id)
        //{
        //     return View(_ageGroupService.GetAgeGroup(id));
        //}

        ////
        //// POST: /AgeGroup/Edit/5

        //[HttpPost]
        //public ActionResult Edit(AgeGroup ageGroup)
        //{
        //    bool IsValidAgeGroupNameAndTier = false;

        //    if (ModelState.IsValid)
        //    {
        //        ageGroup.IsValidAgeGroupAndTier = true;
        //        //IsValidAgeGroupNameAndTier = _ageGroupService.ValidateAgeGroupNameAndTier(ageGroup);

        //        if (ageGroup.IsValidAgeGroupAndTier)
        //        {
        //            var result = _ageGroupService.SubmitAgeGroup(ageGroup);

        //            if (result.ModelCode == 1)
        //            {
        //                return ageGroup.IsSubmitted ? RedirectToAction("Index") : RedirectToAction("Edit", new { id = ageGroup.AgeGroupKey });
        //            }

        //            else
        //            {
        //                ViewBag.Message = "Age Group Name and Tier already exists, please choose a different group name and tier";
        //                return View(ageGroup);
        //            }
        //        }

        //        else
        //        {
        //            ViewBag.Message = "Age Group Name and Tier already exists, please choose a different group name and tier";
        //            return View(ageGroup);
        //        }
        //    }

        //    return View(ageGroup);
        //}

        ////
        //// GET: /AgeGroup/Delete/5
 
        //public ActionResult Delete(int id)
        //{
        //    return View(_ageGroupService.GetAgeGroup(id));
        //}

        ////
        //// POST: /AgeGroup/Delete/5

        //[HttpPost, ActionName("Delete")]
        //public ActionResult DeleteConfirmed(int id)
        //{
        //    _ageGroupService.DeleteAgeGroup(id);

        //    return RedirectToAction("Index");
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing) {
        //        _ageGroupService.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        //public JsonResult FillIndex()
        //{
        //    return Json(_ageGroupService.GetAgeGroups().ToList(), JsonRequestBehavior.AllowGet);
        //}
    }
}

