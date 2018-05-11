using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Kory.Tools.Data.RefereeTools;
using Kory.Tools.Data.Repository;
using Kory.Tools.BR.Utils;

namespace Kory.Tools.BR.Officiating
{
    public class DetailsService
    {
        //private readonly GameDetailsRepository _detailsRepository;

        //public DetailsService()
        //{
        //    _detailsRepository = new GameDetailsRepository();
        //}

        //public List<GameDetails> GetDetails()
        //{
        //    var detailss = _detailsRepository.All.OrderBy(a => a.GameDetailsKey).ToList();

        //    return detailss;
        //}

        //public GameDetails GetDetail(int DetailKey)
        //{
        //    var details = new GameDetails();

        //    try
        //    {
        //        details = _detailsRepository.All.SingleOrDefault(a => a.GameDetailsKey == DetailKey);

        //        if (details != null)
        //        {
        //            details.ModelCode = (int)MessageCodes.Success;
        //        }
        //    }

        //    catch (Exception ex)
        //    {
        //        if (details != null)
        //        {
        //            details.ModelCode = (int)MessageCodes.Failure;
        //            details.Message = ex.Message;
        //        }
        //    }

        //    return details;
        //}

        //public GameDetails SubmitDetail(GameDetails details)
        //{
        //    try
        //    {
        //        // Performs appropriate operations based on Age Group Key value
        //        _detailsRepository.InsertOrUpdate(details);

        //        // Saves and writes the Age Group to the database
        //        _detailsRepository.Save();

        //        // Repopulate the Age Group object
        //        details = GetDetail(details.GameDetailsKey);

        //        // Report the success
        //        details.ModelCode = (int)MessageCodes.Success;
        //    }

        //    catch (Exception ex)
        //    {
        //        // Report the failure
        //        details.ModelCode = (int)MessageCodes.Failure;
                
        //        // Assign the message
        //        details.Message = ex.Message;
        //    }

        //    return details;
        //}

        //public void DeleteDetail(int detailsKey)
        //{
        //    var details = new GameDetails();

        //    try
        //    {
        //        _detailsRepository.Delete(detailsKey);
        //        _detailsRepository.Save();

        //        // Report the success
        //        details.ModelCode = (int)MessageCodes.Success;
        //    }

        //    catch (Exception ex)
        //    {
        //        // Report the failure
        //        details.ModelCode = (int)MessageCodes.Failure;

        //        // Assign the message
        //        details.Message = ex.Message;
        //    }
        //}

        //public GameDetails CreateDefaultDetail()
        //{
        //    var Details = new GameDetails();

        //    return Details;
        //}

        //public void Dispose()
        //{
        //    _detailsRepository.Dispose();
        //}
    }
}
