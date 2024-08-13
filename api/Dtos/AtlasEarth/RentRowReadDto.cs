using System.Collections;
namespace api.Dtos.AtlasEarth;

public partial class RentRowReadDto
{
    public int Id { get; set; }

    public ICollection<double> Row { get; set; }
}