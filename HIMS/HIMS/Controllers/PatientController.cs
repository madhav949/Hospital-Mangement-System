using HIMS.Models;
using Microsoft.AspNetCore.Mvc;

namespace HIMS.Controllers
{
    public class PatientController : Controller
    {

        public IActionResult AddUI()//Load UI
        {
            return View("AddPatient" ,new Patient());
        }
        public IActionResult SubmitPatient([FromBody]Patient obj)//Load UI
        {
            obj.patientName = obj.patientName.ToUpper();
            return Ok( obj);
        }
    }
}
