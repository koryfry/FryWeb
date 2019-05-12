namespace FryWeb.Data.DTO
{
    public class AgeGroup
    {
        public int AgeGroupID { get; set; }
        public string Name { get; set; }
        public string Tier { get; set; }
        public int MinimumAge { get; set; }
        public int MaximumAge { get; set; }
    }
}
