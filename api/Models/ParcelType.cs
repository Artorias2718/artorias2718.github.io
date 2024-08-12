using Google.Cloud.Firestore;
namespace api.Models;

[FirestoreData]
public partial class ParcelType
{
    [FirestoreProperty("id")]
    public int Id { get; set; }

    [FirestoreProperty("rate")]
    public decimal Rate { get; set; }
    
    [FirestoreProperty("type")]
    public string Type { get; set; } = "";
}