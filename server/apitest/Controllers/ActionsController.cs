using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apitest.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class ActionsController : ControllerBase
  {
    
    private readonly ILogger<ActionsController> _logger;

    public ActionsController(ILogger<ActionsController> logger)
    {
      _logger = logger;
    }

    [Route("400")]
    [HttpGet]
    public IActionResult Get400()
    {
      return StatusCode(400, "Bad Request");
    }

    [Route("401")]
    [HttpGet]
    public IActionResult Get401()
    {
      return StatusCode(401, "Unauthorized");
    }

    [Route("403")]
    [HttpGet]
    public IActionResult Get403()
    {
      return StatusCode(403, "Forbidden");
    }

    [Route("404")]
    [HttpGet]
    public IActionResult Get404()
    {
      return StatusCode(404, "Not Found");
    }

    [Route("418")]
    [HttpGet]
    public IActionResult Get418()
    {
      return StatusCode(418, "I'm a teapot");
    }

    [Route("500")]
    [HttpGet]
    public IActionResult Get500()
    {
      return StatusCode(500, "Internal Server Error");
    }

  }
}
