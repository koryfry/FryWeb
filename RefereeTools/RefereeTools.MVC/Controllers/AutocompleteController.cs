using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Kory.Tools.BR.Officiating;
using Kory.Tools.MVC.Models;

namespace Kory.Tools.MVC.Controllers
{
    public class AutocompleteController : Controller
    {
        ////
        //// GET: /Autocomplete/

        //public JsonResult GetAllArenas(string term)
        //{
        //    var arenaService = new ArenaService();

        //    var arenas = arenaService.GetArenasLikeArena(term).Select(a => a.ArenaName).Where(a => a.Contains(term)).ToList();

        //    return Json(arenas, JsonRequestBehavior.AllowGet);
        //}

        ////
        //// GET: /Autocomplete/

        //public JsonResult GetAllOfficials(string term)
        //{
        //    var officialsService = new OfficialsService();

        //    var officials = officialsService.GetOfficialsLikeOfficial(term).Select(o => o.FirstName).Where(o => o.Contains(term)).ToList();

        //    return Json(officials, JsonRequestBehavior.AllowGet);
        //}

        ////
        //// GET: /Autocomplete/

        //public JsonResult GetAllAgeGroupNames(string term)
        //{
        //    var ageGroupService = new AgeGroupService();

        //    var ageGroupNames = ageGroupService.GetAgeGroupNamesLikeAgeGroupName(term).Select(ag => ag.GroupName).Where(ag => ag.Contains(term)).ToList();

        //    return Json(ageGroupNames, JsonRequestBehavior.AllowGet);
        //}

        ////
        //// GET: /Autocomplete/

        //public JsonResult GetAllAgeGroupTiers(string term)
        //{
        //    var ageGroupService = new AgeGroupService();

        //    var ageGroupTiers = ageGroupService.GetAgeGroupTiersLikeAgeGroupTier(term).Select(ag => ag.GroupTier).Where(ag => ag.Contains(term)).ToList();

        //    return Json(ageGroupTiers, JsonRequestBehavior.AllowGet);
        //}
    }
}
