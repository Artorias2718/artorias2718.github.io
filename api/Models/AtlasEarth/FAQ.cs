using Google.Cloud.Firestore;
namespace api.Models.AtlasEarth;

[FirestoreData]
public partial class FAQ
{
    [FirestoreProperty("id")]
    public int Id { get; set; }
    
    [FirestoreProperty("question")]
    public string Question { get; set; }

    [FirestoreProperty("answer")]
    public string Answer { get; set; }
}