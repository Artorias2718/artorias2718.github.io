using api.Dtos.AtlasEarth;
using api.Models.AtlasEarth;
using AutoMapper;

namespace api.Profiles.AtlasEarth;

public class FAQProfile: Profile
{
    public FAQProfile()
    {
        CreateMap<FAQ, FAQReadDto>();
    }
}