using Google.Cloud.Firestore;

namespace api.Models.Root;

[FirestoreData]
public class Page
{
    [FirestoreProperty("id")]
    public int Id { get; set; }
    [FirestoreProperty("label")]
    public string Label { get; set; }
    [FirestoreProperty("href")]
    public string Href { get; set; }
}