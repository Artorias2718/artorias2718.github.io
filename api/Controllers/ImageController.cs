using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using api.Models;
using api.Services;

namespace api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ImageController : ControllerBase
{
    private readonly ImageService _imageService;

    public ImageController(ImageService imageService)
    {
        _imageService = imageService ;
    }

    [HttpGet("[action]")]
    public async Task<FileStreamResult> RenderImage(string imgSrc)
    {
        var result = await _imageService.RenderImage(imgSrc);
        return (FileStreamResult)result;
    }
}
