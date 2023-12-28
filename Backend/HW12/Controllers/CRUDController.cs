using HW12.Context;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HW12.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CRUDController : ControllerBase
    {
        CRUD crud=new CRUD();
        [HttpGet]
        [Route("read")]
        public IActionResult Read()
        {
           return Ok(crud.GetAllPersons());
        }
    }
}
