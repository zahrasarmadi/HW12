using HW12.Context;
using HW12.Entity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HW12.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PersonController : ControllerBase
{
    Authentication authentication=new Authentication();
    [HttpPost]
    [Route("register")]
    public IActionResult RegisterPerson([FromForm] Person person)
    { 
       var result= authentication.Register(person);
        return Ok(result);
    }

    [HttpPost]
    [Route("login")]
    public IActionResult LoginPerson([FromForm]LoginDTO loginUser)
    {
        var login = authentication.Login(loginUser);
        return Ok(login);
    }

}
