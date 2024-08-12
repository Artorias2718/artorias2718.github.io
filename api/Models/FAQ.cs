using Google.Cloud.Firestore;
namespace api.Models;

[FirestoreData]
public partial class FAQ
{
    [FirestoreProperty("question")]
    public string Question { get; set; }

    [FirestoreProperty("answer")]
    public string Answer { get; set; }
}