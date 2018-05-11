using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kory.Tools.Data.RefereeTools
{
    public class GameHeader
    {
        //[Key]
        //[Display(Name = "Game Header Number")]
        //[Required(AllowEmptyStrings = false, ErrorMessage = "Game Header Number is required")]
        //public int GameHeaderKey { get; set; }

        //[Display(Name = "Date and Time Of Game", AutoGenerateField = true, Description = "Date and time the game was worked")]
        //[Required(AllowEmptyStrings = false, ErrorMessage = "Date of Game is required")]
        //[DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{0:MM/dd/yyyy}", NullDisplayText = "")]
        //[DataType(DataType.Date, ErrorMessage = "Please Enter a Valid Date Format")]
        //public DateTime GameDate { get; set; }

        //[ForeignKey("Arena")]
        //[Column(Order = 1)]
        //public virtual int ArenaKey { get; set; }
        //public virtual Arena Arena { get; set; }

        //[ForeignKey("AgeGroup")]
        //[Column(Order = 2)]
        //public virtual int AgeGroupKey { get; set; }
        //public virtual AgeGroup AgeGroup { get; set; }

        //[ForeignKey("Officials")]
        //[Column(Order = 3)]
        //public virtual int OfficialsKey { get; set; }
        //public virtual Officials Officials { get; set; }

        //[ForeignKey("Partner1_Official")]
        //[Column(Order = 4)]
        //public virtual int? Partner1_OfficialsKey { get; set; }
        //public virtual Officials Partner1_Official { get; set; }

        //[ForeignKey("Partner2_Official")]
        //[Column(Order = 5)]
        //public virtual int? Partner2_OfficialsKey { get; set; }
        //public virtual Officials Partner2_Official { get; set; }

        //[ForeignKey("Partner3_Official")]
        //[Column(Order = 6)]
        //public virtual int? Partner3_OfficialsKey { get; set; }
        //public virtual Officials Partner3_Official { get; set; }
    }
}
