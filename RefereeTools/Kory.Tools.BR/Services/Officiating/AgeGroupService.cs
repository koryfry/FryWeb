using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Kory.Tools.Data.RefereeTools;
using Kory.Tools.Business.Repository;
using Kory.Tools.Contracts.RepositoryInterfaces;
using Kory.Tools.BR.Utils;

namespace Kory.Tools.Data.Business.Services.Officiating
{
    public class AgeGroupService
    {
        //private readonly AgeGroupRepository _ageGroupRepository;

        //public AgeGroupService()
        //{
        //    _ageGroupRepository = new AgeGroupRepository();
        //}

        //public List<AgeGroup> GetAgeGroups()
        //{
        //    var ageGroups = _ageGroupRepository.All.OrderBy(a => a.AgeGroupKey).ToList();

        //    return ageGroups;
        //}

        //public AgeGroup GetAgeGroup(int ageGroupKey)
        //{
        //    var ageGroup = new AgeGroup();

        //    try
        //    {
        //        ageGroup = _ageGroupRepository.All.SingleOrDefault(a => a.AgeGroupKey == ageGroupKey);

        //        if (ageGroup != null)
        //        {
        //            ageGroup.ModelCode = (int)MessageCodes.Success;
        //        }
        //    }

        //    catch (Exception ex)
        //    {
        //        if (ageGroup != null)
        //        {
        //            ageGroup.ModelCode = (int)MessageCodes.Failure;
        //            ageGroup.Message = ex.Message;
        //        }
        //    }

        //    return ageGroup;
        //}

        //public AgeGroup SubmitAgeGroup(AgeGroup ageGroup)
        //{
        //    try
        //    {
        //        // Performs appropriate operations based on Age Group Key value
        //        _ageGroupRepository.InsertOrUpdate(ageGroup);

        //        // Saves and writes the Age Group to the database
        //        _ageGroupRepository.Save();

        //        // Repopulate the Age Group object
        //        ageGroup = GetAgeGroup(ageGroup.AgeGroupKey);

        //        ageGroup.IsSubmitted = true;

        //        // Report the success
        //        ageGroup.ModelCode = (int)MessageCodes.Success;
        //    }

        //    catch (Exception ex)
        //    {
        //        ageGroup.IsSubmitted = false;

        //        // Report the failure
        //        ageGroup.ModelCode = (int)MessageCodes.Failure;

        //        // Assign the message
        //        ageGroup.Message = ex.Message;
        //    }

        //    return ageGroup;
        //}

        //public void DeleteAgeGroup(int ageGroupKey)
        //{
        //    var ageGroup = new AgeGroup();

        //    try
        //    {
        //        _ageGroupRepository.Delete(ageGroupKey);
        //        _ageGroupRepository.Save();

        //        // Report the success
        //        ageGroup.ModelCode = (int)MessageCodes.Success;
        //    }

        //    catch (Exception ex)
        //    {
        //        // Report the failure
        //        ageGroup.ModelCode = (int)MessageCodes.Failure;

        //        // Assign the message
        //        ageGroup.Message = ex.Message;
        //    }
        //}

        //public List<AgeGroup> GetAgeGroupNamesLikeAgeGroupName(string term)
        //{
        //    return _ageGroupRepository.All.Distinct().Where(ag => ag.GroupName.Equals(term)).ToList();
        //}

        //public List<AgeGroup> GetAgeGroupTiersLikeAgeGroupTier(string term)
        //{
        //    return _ageGroupRepository.All.Where(ag => ag.GroupTier.Contains(term)).ToList();
        //}

        //public AgeGroup CreateDefaultAgeGroup()
        //{
        //    var AgeGroup = new AgeGroup();

        //    return AgeGroup;
        //}

        //public bool ValidateAgeGroupName(AgeGroup ageGroup)
        //{
        //    if (ageGroup.GroupName != null)
        //    {
        //        //Does Age Group Name already exist
        //        if (DoesAgeGroupNameAlreadyExist(ageGroup))
        //        {
        //            //Age Group Name is Not Valid
        //            ageGroup.GroupNameNotValidReason = AgeGroupNameNotValid.AlreadyExists;
        //            return false;
        //        }

        //        // Valid Age Group Name
        //        ageGroup.IsValidAgeGroupName = true;
        //        return true;
        //    }

        //    else
        //    {
        //        return false;
        //    }
        //}

        //public List<AgeGroup> GetAgeGroupNamesNotLikeAgeGroupName(string term)
        //{
        //    return _ageGroupRepository.All.Where(ag => ag.GroupName != term).ToList();
        //}

        //private bool DoesAgeGroupNameAlreadyExist(AgeGroup ageGroup)
        //{
        //    List<AgeGroup> MatchAgeGroupNames = GetAgeGroupNamesLikeAgeGroupName(ageGroup.GroupName.Trim());

        //    foreach (AgeGroup groupName in MatchAgeGroupNames)
        //    {
        //        if (groupName.GroupName.ToString().Contains(groupName.GroupName))
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

        //public bool ValidateAgeGroupTier(AgeGroup ageGroup)
        //{
        //    if (ageGroup.GroupTier != null)
        //    {
        //        //Does Age Group Tier already exist
        //        if (DoesAgeGroupTierAlreadyExist(ageGroup))
        //        {
        //            //Age Group Tier is Not Valid
        //            ageGroup.GroupTierNotValidReason = AgeGroupTierNotValid.AlreadyExists;
        //            return false;
        //        }

        //        // Valid Age Group Tier
        //        ageGroup.IsValidAgeGroupTier = true;
        //        return true;
        //    }

        //    else
        //    {
        //        return false;
        //    }
        //}


        //public bool ValidateAgeGroupNameAndTier(AgeGroup ageGroup)
        //{
        //    if (ageGroup.GroupName != null && ageGroup.GroupTier != null)
        //    {
        //        //Do the Age Group Name and Tier already exist
        //        if (DoesAgeGroupNameAlreadyExist(ageGroup) && DoesAgeGroupTierAlreadyExist(ageGroup))
        //        {
        //            //Age Group Name and Tier is Not Valid
        //            ageGroup.GroupNameAndTierNotValidReason = AgeGroupAndTierNotValid.AlreadyExists;
        //            return false;
        //        }

        //        // Valid Age Group Tier
        //        ageGroup.IsValidAgeGroupAndTier = true;
        //        return true;
        //    }

        //    else
        //    {
        //        return false;
        //    }
        //}


        //private bool DoesAgeGroupTierAlreadyExist(AgeGroup ageGroup)
        //{
        //    List<AgeGroup> MatchAgeGroupTiers = GetAgeGroupTiersLikeAgeGroupTier(ageGroup.GroupTier.Trim());

        //    foreach (AgeGroup groupTier in MatchAgeGroupTiers)
        //    {
        //        if (groupTier.GroupTier.ToString().Contains(groupTier.GroupTier))
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

        //public List<AgeGroup> GetAgeGroupTiersNotLikeAgeGroupTier(string term)
        //{
        //    return _ageGroupRepository.All.Where(ag => ag.GroupTier != term).ToList();
        //}

        //public void Dispose()
        //{
        //    _ageGroupRepository.Dispose();
        //}
    }
}
