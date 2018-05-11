namespace Kory.Tools.Data.Entities.RefereeTools
{
    using System;
    using Kory.Tools.Data.Entities;

    public class OfficiatedGame : EntityBase
    {
        public int OfficiatedGameKey { get; set; }

        public DateTime GameDate { get; set; }

        public DateTime GameTime { get; set; }

        public int ArenaKey { get; set; }

        public int AgeGroupKey { get; set; }
        
        public int OfficialsKey { get; set; }

        public bool? Ref { get; set; }

        public bool? Line { get; set; }
        
        public int? Partner1_OfficialsKey { get; set; }

        public int? Partner2_OfficialsKey { get; set; }

        public int? Partner3_OfficialsKey { get; set; }

        public decimal RateOfPay { get; set; }

        public int DistanceTraveled { get; set; }

        public decimal MiscExpense { get; set; }

        public DateTime? DatePaid { get; set; }

        public decimal? AmountPaid { get; set; }

        // Navigational Properties
        public virtual Arena Arena { get; set; }
        public virtual AgeGroup AgeGroup { get; set; }
        public virtual Officials Official { get; set; }
        public virtual Officials Partner1 { get; set; }
        public virtual Officials Partner2 { get; set; }
        public virtual Officials Partner3 { get; set; }
    }
}
