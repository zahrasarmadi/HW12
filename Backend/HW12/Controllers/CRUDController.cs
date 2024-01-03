using HW12.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HW12.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CRUDController : ControllerBase
    {
        CRUD crud = new CRUD();
        [HttpGet]
        [Route("read")]
        public IActionResult Read()
        {
            return Ok(crud.GetAllPersons());
        }

        [HttpPut]
        [Route("deavtive")]
        public IActionResult Deactive(string email)
        {
            var result=crud.DeActivePerson(email);
            return Ok(result);
        }
        [HttpPut]
        [Route("avtive")]
        public IActionResult Active( string email)
        {
            var result = crud.ActivePerson(email);
            return Ok(result);
        }
        [HttpDelete]
        [Route("delete")]
        public IActionResult Delete(string email)
        {
            var result = crud.DeletePerson(email);
            return Ok(result);
        }

    }
}
