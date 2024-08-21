using Microsoft.AspNetCore.Mvc;

namespace api.Services
{
    public class ImageService
    {
        public ImageService() {}

        public async Task<IActionResult> RenderImage(string imgSrc)
        {
            string imgSrcToLower = imgSrc.ToLower();
            FileStream stream = new FileStream(imgSrc, new FileStreamOptions(){ Access = FileAccess.Read });
            return imgSrcToLower.Contains("jpg") || imgSrcToLower.Contains("jpeg")
                ? await Task.Run(() => new FileStreamResult(stream, "image/jpeg"))
                : await Task.Run(() => new FileStreamResult(stream, "image/png"));
        }
    }
}