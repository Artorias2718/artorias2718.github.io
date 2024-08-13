using api.Dtos.AtlasEarth;
using api.Models.AtlasEarth;
using AutoMapper;

namespace api.Profiles.AtlasEarth;

public class ResourceProfile: Profile
{
    public ResourceProfile()
    {
        CreateMap<Resource, ResourceReadDto>();
    }
}