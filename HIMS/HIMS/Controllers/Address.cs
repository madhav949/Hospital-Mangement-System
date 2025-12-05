using HIMS.Models;
using System.Text.Json.Serialization;

namespace HMS_server.Models
{
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