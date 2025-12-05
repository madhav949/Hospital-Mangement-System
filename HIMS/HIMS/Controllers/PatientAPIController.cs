using HIMS.Models;
using HIMS.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HIMS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PatientAPIController : ControllerBase
    {
        private static List<Patient> patientList = new List<Patient>();
        private static int nextId = 1;
        // GET: api/<PatientAPIController>
        [HttpGet]
        public IActionResult GetPatients()
        {
            //return new string[] { "value1", "value2" };
            using var db = new PatientDbContext();
            var patients = db.patients.Include(p =>p.Addresses).ToList();
            return Ok(patients);
        }

        // GET api/<PatientAPIController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<PatientAPIController>
        [HttpPost]
        public IActionResult AddPatient([FromBody] Patient patient)
        {
            if (string.IsNullOrWhiteSpace(patient.patientName))
                return BadRequest("Patient name is required");

            using var db = new PatientDbContext();

            // Important: assign Patient reference to addresses
            foreach (var addr in patient.Addresses)
            {
                addr.Patient = patient;  // Link address to patient
            }

            db.patients.Add(patient);
            db.SaveChanges();

            return Ok(patient);
        }

        // PUT api/<PatientAPIController>/5
        [HttpPut("{id}")]
        public IActionResult UpdatePatient(int id, [FromBody] Patient updated)
        {
            using var db = new PatientDbContext();
            var existing = db.patients.Include(p => p.Addresses).FirstOrDefault(p => p.id == id);
            if (existing == null)
                return NotFound();

            existing.patientName = updated.patientName;
            existing.age = updated.age;
            existing.phone = updated.phone;

            db.Addresses.RemoveRange(existing.Addresses);

            if (updated.Addresses != null)
            {
                foreach (var addr in updated.Addresses)
                {
                    addr.PatientId = existing.id;
                    db.Addresses.Add(addr);
                }
            }

            db.SaveChanges();
            return Ok(existing);
        }

        // DELETE api/<PatientAPIController>/5
        [HttpDelete("{id}")]
        public IActionResult DeletePatient(int id)
        {
            using var db = new PatientDbContext();
            var patient = db.patients.Include(p => p.Addresses).FirstOrDefault(p => p.id == id);
            if (patient == null)
                return NotFound();

            db.patients.Remove(patient);
            db.SaveChanges();
            return Ok();
        }
    }
}
