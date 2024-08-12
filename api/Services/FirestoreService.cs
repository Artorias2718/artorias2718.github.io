using Google.Cloud.Firestore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using api.Models;

namespace api.Services;

public class FirestoreService
{
    private readonly FirestoreDb _firestoreDb;

    public FirestoreService()
    {
        // Initialize Firestore with your project ID
        _firestoreDb = FirestoreDb.Create("artorias2718-a309e");
    }

    public async Task<ICollection<FAQ>> FAQs()
    {
        DocumentReference docRef = _firestoreDb.Collection("atlasearth").Document("faqs");
        DocumentSnapshot snapshot = await docRef.GetSnapshotAsync();

        if (snapshot.Exists)
        {
            // Retrieve and deserialize the 'data' field
            var result = snapshot.GetValue<List<FAQ>>("data");
            return result;
        }

        Console.WriteLine("No document found or 'data' field is missing.");
        return new List<FAQ>();
    }
    
    public async Task<ICollection<ParcelType>> ParcelTypes()
    {
        DocumentReference docRef = _firestoreDb.Collection("atlasearth").Document("parcelTypes");
        DocumentSnapshot snapshot = await docRef.GetSnapshotAsync();
 
        if (snapshot.Exists)
        {
            // Retrieve and deserialize the 'data' field
            var result = snapshot.GetValue<List<ParcelType>>("data");
            return result;
        }
 
        Console.WriteLine("No document found or 'data' field is missing.");
        return new List<ParcelType>();
     }
    
     public async Task<ICollection<RentRow>> RentTable(string key)
     {
         DocumentReference docRef = _firestoreDb.Collection("atlasearth").Document("rentTables");
         DocumentSnapshot snapshot = await docRef.GetSnapshotAsync();

         if (snapshot.Exists)
         {
             // Retrieve and deserialize a 'rentTable' fields
             var result = snapshot.GetValue<ICollection<RentRow>>(key);
             return result;
         }
     
         Console.WriteLine($"No document found or '{key}' field is missing.");
         return new List<RentRow>();
     }
}