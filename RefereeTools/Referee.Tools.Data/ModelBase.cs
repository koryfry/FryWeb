using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Kory.Tools.Data
{
    public abstract class ModelBase
    {
        [NotMapped]
        [Display(AutoGenerateField = false)]
        public int ModelCode { get; set; }

        [NotMapped]
        [Display(AutoGenerateField = true)]
        public string Message { get; set; }

        [NotMapped]
        public ICollection<string> Errors { get; set; }
    }
}
