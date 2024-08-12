using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using api.Models;
using api.Services;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class FirebaseController : ControllerBase
{
    private readonly FirestoreService _firestoreService;

    public FirebaseController(FirestoreService firestoreService)
    {
        _firestoreService = firestoreService;
    }

    [HttpGet("[action]")]
    public async Task<IActionResult> FAQs()
    {
        var faqs = await _firestoreService.FAQs();
        return Ok(faqs);
    }

    [HttpGet("[action]")]
    public async Task<IActionResult> ParcelTypes()
    {
        var parcelTypes = await _firestoreService.ParcelTypes();
        return Ok(parcelTypes);
    }

    [HttpGet("[action]")]
    public async Task<IActionResult> RentTable(string key)
    {
        var faqs = await _firestoreService.RentTable(key);
        return Ok(faqs);
    }
}
