namespace Kory.Tools.Data.Entities.RefereeTools
{
    using Kory.Tools.Data.Entities;

    //public enum OfficialNotValid
    //{
    //    AlreadyExists = 1
    //}

    public class Officials : EntityBase
    {
        public int OfficialsKey { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public int OfficialLevel { get; set; }

        public string PhoneNumber { get; set; }

        public virtual int AddressKey { get; set; }

        public virtual Address Address { get; set; }

        //[NotMapped]
        //public bool IsValidOfficial { get; set; }

        //[NotMapped]
        //public OfficialNotValid? NotValidReason { get; set; }

        //[NotMapped]
        //public bool IsSubmitted { get; set; } 
    }
}
