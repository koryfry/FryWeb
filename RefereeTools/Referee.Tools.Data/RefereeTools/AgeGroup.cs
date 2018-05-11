namespace Kory.Tools.Data.Entities.RefereeTools
{
    using Kory.Tools.Data;
    using Kory.Tools.Data.Entities;

    //public enum AgeGroupAndTierNotValid
    //{
    //    AlreadyExists = 1
    //}
    
    //public enum AgeGroupNameNotValid
    //{
    //    AlreadyExists = 1
    //}

    //public enum AgeGroupTierNotValid
    //{
    //    AlreadyExists = 1
    //}

    public class AgeGroup : EntityBase
    {
        public int AgeGroupKey { get; set; }

        public string GroupName { get; set; }

        public string GroupTier { get; set; }

        //[NotMapped]
        //public bool IsValidAgeGroupName { get; set; }

        //[NotMapped]
        //public bool IsValidAgeGroupTier { get; set; }

        //[NotMapped]
        //public bool IsValidAgeGroupAndTier { get; set; }

        //[NotMapped]
        //public AgeGroupNameNotValid? GroupNameNotValidReason { get; set; }

        //[NotMapped]
        //public AgeGroupTierNotValid? GroupTierNotValidReason { get; set; }

        //[NotMapped]
        //public AgeGroupAndTierNotValid? GroupNameAndTierNotValidReason { get; set; }

        //[NotMapped]
        //public bool IsSubmitted { get; set; } 
    }
}
