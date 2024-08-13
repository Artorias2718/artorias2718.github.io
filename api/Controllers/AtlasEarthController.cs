using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using api.Models;
using api.Services;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AtlasEarthController : ControllerBase
{
    private readonly AtlasEarthService _atlasEarthService;

    public AtlasEarthController(AtlasEarthService atlasEarthService)
    {
        _atlasEarthService = atlasEarthService;
    }

    [HttpGet("[action]")]
    public async Task<IActionResult> FAQs()
    {
        var faqs = await _atlasEarthService.FAQs();
        return Ok(faqs);
    }

    [HttpGet("[action]")]
    public async Task<IActionResult> ParcelTypes()
    {
        var parcelTypes = await _atlasEarthService.ParcelTypes();
        return Ok(parcelTypes);
    }

    [HttpGet("[action]")]
    public async Task<IActionResult> RentTable(string key)
    {
        var rentTable = await _atlasEarthService.RentTable(key);
        return Ok(rentTable);
    }
    
    [HttpGet("[action]")]
    public async Task<IActionResult> Resources()
    {
        var resources = await _atlasEarthService.Resources();
        return Ok(resources);
    }
}
