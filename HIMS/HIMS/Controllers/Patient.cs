using System.Text.Json.Serialization;
namespace HIMS.Models
{
    public class Patient
    {
        public int id { get; set; }
        public string patientName { get; set; }
        public int age { get; set; }
        public double phone { get; set; }

        public List<Address> Addresses { get; set; }
        public Patient()
        {
            this.Addresses = new List<Address>();
        }
    }
    
    public class Address
    {
        public int Id { get; set; }
        public string Street1 { get; set; } = string.Empty;
        public string Street2 { get; set; } = string.Empty;

        public int PatientId { get; set; }

        [JsonIgnore]
        public Patient? Patient { get; set; }
    }
}
