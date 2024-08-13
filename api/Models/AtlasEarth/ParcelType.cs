using Google.Cloud.Firestore;
namespace api.Models.AtlasEarth;

[FirestoreData]
public partial class ParcelType
{
    [FirestoreProperty("id")]
    public int Id { get; set; }

    [FirestoreProperty("rate")]
    public double Rate { get; set; }
    
    [FirestoreProperty("type")]
    public string Type { get; set; } = "";
}