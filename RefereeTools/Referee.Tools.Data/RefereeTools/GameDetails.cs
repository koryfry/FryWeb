using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Kory.Tools.Data.RefereeTools
{
    using Kory.Tools.Data;
    using Kory.Tools.Data.Entities;

    public class GameDetails : EntityBase
    {
        public int GameDetailsKey { get; set; }

        [Key]
        [Column(Order = 1)]
        [ForeignKey("GameHeader")]
        [Display(Name = "Game Header Number")]
        [Required(AllowEmptyStrings = false, ErrorMessage = "Game Header Number is required")]
        public int GameHeaderKey { get; set; }
        public virtual GameHeader GameHeader { get; set; }

        //[Key][Column(Order = 2)]
        //[Display(Name = "Time Of Game", AutoGenerateField=true, Description="Time that the game was worked")]
        //[Required(AllowEmptyStrings = false, ErrorMessage = "Time of Game is required")]
        //[DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:HH:mm}", NullDisplayText = "")]
        //[DataType(DataType.Time)]
        //public DateTime? GameTime { get; set; }

        //[Display(Name = "Work Game as Referee")]
        //[Required(AllowEmptyStrings = false, ErrorMessage = "Work Game as Referee is required")]
        //public bool Ref { get; set; }

        //[Display(Name = "Work Game as Linesman")]
        //[Required(AllowEmptyStrings = false, ErrorMessage = "Work Game as Linesman is required")]
        //public bool Line { get; set; }

        //[Required]
        //[Display(Name = "Rate Of Pay")]
        //[RegularExpression(@"^\d+.\d{0,2}$", ErrorMessage = "Rate Of Pay can't have more than 2 decimals")]
        //public decimal RateOfPay { get; set; }

        //[Required]
        //[Display(Name = "Distance to and from Arena")]
        //public int DistanceTraveled { get; set; }

        //[Display(Name = "Misc Expense")]
        //[RegularExpression(@"^\d+.\d{0,2}$", ErrorMessage = "Misc Expense can't have more than 2 decimals")]
        //public decimal MiscExpense { get; set; }

        //[Display(Name = "Date Paid")]
        //[Required(AllowEmptyStrings = false, ErrorMessage = "Date Paid is required")]
        //[DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:MM/dd/yyyy}", NullDisplayText = "")]
        //[DataType(DataType.Date, ErrorMessage = "Please Enter a Valid Date Format")]
        //public DateTime DatePaid { get; set; }

        //[Display(Name = "Amount Paid")]
        //[RegularExpression(@"^\d+.\d{0,2}$", ErrorMessage = "Amount Paid can't have more than 2 decimals")]
        //public decimal AmountPaid { get; set; }
    }
}
