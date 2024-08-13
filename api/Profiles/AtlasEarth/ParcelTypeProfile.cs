using api.Dtos.AtlasEarth;
using api.Models.AtlasEarth;
using AutoMapper;

namespace api.Profiles.AtlasEarth;

public class ParcelTypeProfile: Profile
{
    public ParcelTypeProfile()
    {
        CreateMap<ParcelType, ParcelTypeReadDto>();
    }
}