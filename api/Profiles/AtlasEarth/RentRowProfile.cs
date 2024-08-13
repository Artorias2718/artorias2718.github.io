using api.Dtos.AtlasEarth;
using api.Models.AtlasEarth;
using AutoMapper;

namespace api.Profiles.AtlasEarth;

public class RentRowProfile: Profile
{
    public RentRowProfile()
    {
        CreateMap<RentRow, RentRowReadDto>();
    }
}