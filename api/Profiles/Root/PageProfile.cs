using api.Models.Root;
using api.Dtos.Root;
using AutoMapper;

namespace api.Profiles.Root;

public class PageProfile: Profile
{
    public PageProfile()
    {
        CreateMap<Page, PageReadDto>();
    }
}