using Google.Cloud.Firestore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using api.Models.AtlasEarth;
using api.Dtos.AtlasEarth;
using AutoMapper;

namespace api.Services;

public class AtlasEarthService
{
    private readonly FirestoreDb _atlasEarthDb;
    private readonly IMapper _mapper;

    public AtlasEarthService(IMapper mapper)
    {
        // Initialize Firestore with your project ID
        _atlasEarthDb = FirestoreDb.Create("artorias2718-a309e");
        _mapper = mapper;
    }

    public async Task<ICollection<FAQReadDto>> FAQs()
    {
        DocumentReference docRef = _atlasEarthDb.Collection("atlasearth").Document("faqs");
        DocumentSnapshot snapshot = await docRef.GetSnapshotAsync();

        if (snapshot.Exists)
        {
            // Retrieve and deserialize the 'data' field
            var result = snapshot.GetValue<ICollection<FAQ>>("data");
            return _mapper.Map<List<FAQReadDto>>(result);
        }

        Console.WriteLine("No document found or 'data' field is missing.");
        return new List<FAQReadDto>();
    }
    
    public async Task<ICollection<ParcelTypeReadDto>> ParcelTypes()
    {
        DocumentReference docRef = _atlasEarthDb.Collection("atlasearth").Document("parcelTypes");
        DocumentSnapshot snapshot = await docRef.GetSnapshotAsync();
 
        if (snapshot.Exists)
        {
            // Retrieve and deserialize the 'data' field
            var result = snapshot.GetValue<ICollection<ParcelType>>("data");
            return _mapper.Map<List<ParcelTypeReadDto>>(result);
        }
 
        Console.WriteLine("No document found or 'data' field is missing.");
        return new List<ParcelTypeReadDto>();
     }
    
    public async Task<ICollection<RentRowReadDto>> RentTable(string key)
    {
        DocumentReference docRef = _atlasEarthDb.Collection("atlasearth").Document("rentTables");
        DocumentSnapshot snapshot = await docRef.GetSnapshotAsync();

        if (snapshot.Exists)
        {
            // Retrieve and deserialize 'rentTable' fields
            var result = snapshot.GetValue<Dictionary<string, List<RentRow>>>("data");
            return _mapper.Map<List<RentRowReadDto>>(result[key]);
        }
     
        Console.WriteLine($"No document found or '{key}' field is missing.");
        return new List<RentRowReadDto>();
     }
    
     public async Task<ICollection<ResourceReadDto>> Resources()
     {
         DocumentReference docRef = _atlasEarthDb.Collection("atlasearth").Document("resources");
         DocumentSnapshot snapshot = await docRef.GetSnapshotAsync();
  
         if (snapshot.Exists)
         {
             // Retrieve and deserialize the 'data' field
             var result = snapshot.GetValue<ICollection<Resource>>("data");
             return _mapper.Map<List<ResourceReadDto>>(result);
         }
  
         Console.WriteLine("No document found or 'data' field is missing.");
         return new List<ResourceReadDto>();
      }   
}