using System;
using System.Collections.Generic;
using System.Text;

namespace FryWeb.Data.DTO
{
    public class Icon
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string TooltipText { get; set; }
        public string TooltipPosition { get; set; }
        public string BackgroundColor { get; set; }
        public string TextColor { get; set; }
        public string AvatarName { get; set; }
        public string CssClass { get; set; }
    }
}
