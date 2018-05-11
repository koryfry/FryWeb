using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Kory.Tools.Data.RefereeTools;
using Kory.Tools.Data.Repository;
using Kory.Tools.BR.Utils;


namespace Kory.Tools.Data.Business.Services.Officiating
{
    public class OfficialsService
    {
        //private readonly OfficialsRepository _officialsRepository;

        //public OfficialsService()
        //{
        //    _officialsRepository = new OfficialsRepository();
        //}

        //public List<Officials> GetOfficials()
        //{
        //    var officials = _officialsRepository.All.OrderBy(a => a.OfficialsKey).ToList();

        //    return officials;
        //}

        //public Officials GetOfficial(int OfficialsKey)
        //{
        //    var official = new Officials();

        //    try
        //    {
        //        official = _officialsRepository.All.SingleOrDefault(a => a.OfficialsKey == OfficialsKey);

        //        if (official != null)
        //        {
        //            official.ModelCode = (int)MessageCodes.Success;
        //        }
        //    }

        //    catch (Exception ex)
        //    {
        //        if (official != null)
        //        {
        //            official.ModelCode = (int)MessageCodes.Failure;
        //            official.Message = ex.Message;
        //        }
        //    }

        //    return official;
        //}

        //public Officials SubmitOfficial(Officials official)
        //{
        //    try
        //    {
        //        // Performs appropriate operations based on Age Group Key value
        //        _officialsRepository.InsertOrUpdate(official);

        //        // Saves and writes the Age Group to the database
        //        _officialsRepository.Save();

        //        // Repopulate the Age Group object
        //        official = GetOfficial(official.OfficialsKey);

        //        official.IsSubmitted = true;

        //        // Report the success
        //        official.ModelCode = (int)MessageCodes.Success;
        //    }

        //    catch (Exception ex)
        //    {
        //        official.IsSubmitted = false;
                
        //        // Report the failure
        //        official.ModelCode = (int)MessageCodes.Failure;
                
        //        // Assign the message
        //        official.Message = ex.Message;
        //    }

        //    return official;
        //}

        //public void DeleteOfficial(int officialsKey)
        //{
        //    var official = new Officials();

        //    try
        //    {
        //        _officialsRepository.Delete(officialsKey);
        //        _officialsRepository.Save();

        //        // Report the success
        //        official.ModelCode = (int)MessageCodes.Success;
        //    }

        //    catch (Exception ex)
        //    {
        //        // Report the failure
        //        official.ModelCode = (int)MessageCodes.Failure;

        //        // Assign the message
        //        official.Message = ex.Message;
        //    }
        //}

        //public List<Officials> GetOfficialsLikeOfficial(string term)
        //{
        //    return _officialsRepository.All.Where(o => o.FirstName.Contains(term)).ToList();
        //}

        //public Officials CreateDefaultOfficial()
        //{
        //    var Official = new Officials();

        //    return Official;
        //}

        //public bool ValidateOfficialName(Officials official)
        //{
        //    if (official.FirstName != null && official.LastName != null)
        //    {
        //        //Does Official Name already exist
        //        if (DoesOfficialNameAlreadyExist(official))
        //        {
        //            //Official Name is Not Valid
        //            official.NotValidReason = OfficialNotValid.AlreadyExists;
        //            official.IsValidOfficial = false;

        //            return false;
        //        }

        //        // Valid Official
        //        official.IsValidOfficial = true;
        //        return true;
        //    }

        //    else
        //    {
        //        return false;
        //    }
        //}

        //public List<Officials> GetOfficialNamesLikeOfficialName(string term)
        //{
        //    return _officialsRepository.All.Where(o => o.FirstName == term).ToList();
        //}

        //public List<Officials> GetOfficialNamesNotLikeOfficialName(string term)
        //{
        //    return _officialsRepository.All.Where(o => o.FirstName != term).ToList();
        //}

        //private bool DoesOfficialNameAlreadyExist(Officials official)
        //{
        //    List<Officials> MatchOfficialNames = GetOfficialNamesLikeOfficialName(official.FirstName.Trim());

        //    foreach (Officials Official in MatchOfficialNames)
        //    {
        //        if (Official.FirstName.ToString().Contains(official.FirstName))
        //        {
        //            return true;
        //        }

        //        else
        //        {
        //            return false;
        //        }
        //    }

        //    return false;
        //}

        //public void Dispose()
        //{
        //    _officialsRepository.Dispose();
        //}
    }
}
