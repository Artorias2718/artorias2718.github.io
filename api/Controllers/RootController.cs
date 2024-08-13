using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using api.Models;
using api.Services;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RootController : ControllerBase
{
    private readonly RootService _rootService;

    public RootController(RootService rootService)
    {
        _rootService = rootService;
    }

    [HttpGet("[action]")]
    public async Task<IActionResult> Pages()
    {
        var pages = await _rootService.Pages();
        return Ok(pages);
    }
}