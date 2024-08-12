using System.Collections;
using Google.Cloud.Firestore;
namespace api.Models;

[FirestoreData]
public partial class RentRow
{
    [FirestoreProperty("id")]
    public int Id { get; set; }

    [FirestoreProperty("row")]
    public ICollection<double> Row { get; set; }
}