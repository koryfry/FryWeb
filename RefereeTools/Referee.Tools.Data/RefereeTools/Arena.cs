namespace Kory.Tools.Data.Entities.RefereeTools
{
    using Kory.Tools.Data.Entities;

    //public enum ArenaNotValid
    //{
    //    AlreadyExists = 1
    //}

    public class Arena : EntityBase
    {
        public int ArenaKey { get; set; }

        public string ArenaName { get; set; }

        public string PhoneNumber { get; set; }

        //[ForeignKey("Address")]
        public virtual int AddressKey { get; set; }

        public virtual Address Address { get; set; }

        //[NotMapped]
        //public bool IsValidArena { get; set; }

        //[NotMapped]
        //public ArenaNotValid? NotValidReason { get; set; }

        //[NotMapped]
        //public bool IsSubmitted { get; set; } 
    }
}
