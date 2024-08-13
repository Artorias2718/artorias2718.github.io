using Google.Cloud.Firestore;
namespace api.Models.AtlasEarth;

[FirestoreData]
public partial class Resource
{
    [FirestoreProperty("id")]
    public int Id { get; set; }

    [FirestoreProperty("label")]
    public string Label { get; set; } = "";
    
    [FirestoreProperty("description")]
    public string Description { get; set; } = "";
    
    [FirestoreProperty("href")]
    public string Href { get; set; } = "";
}