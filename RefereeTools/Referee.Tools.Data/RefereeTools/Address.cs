namespace Kory.Tools.Data.Entities.RefereeTools
{
    using Kory.Tools.Data.Entities;
    
    public class Address: EntityBase
    {
        public int AddressKey { get; set; }

        public string AddressLine1 { get; set; }

        public string AddressLine2 { get; set; }

        public string AddressLine3 { get; set; }

        public string City { get; set; }

        public string State { get; set; }

        public string Zipcode { get; set; }

        public virtual int AddressTypeKey { get; set; }

        public virtual AddressType AddressType { get; set; }
    }
}
