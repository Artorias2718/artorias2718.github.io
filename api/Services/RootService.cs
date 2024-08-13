using Google.Cloud.Firestore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;
using api.Models.Root;
using api.Dtos.Root;
using AutoMapper;

namespace api.Services;

public class RootService
{
    private readonly FirestoreDb _sharedDb;
    private readonly IMapper _mapper;

    public RootService(IMapper mapper)
    {
        // Initialize Firestore with your project ID
        _sharedDb = FirestoreDb.Create("artorias2718-a309e");
        _mapper = mapper;
    }

    public async Task<ICollection<PageReadDto>> Pages()
    {
        DocumentReference docRef = _sharedDb.Collection("root").Document("pages");
        DocumentSnapshot snapshot = await docRef.GetSnapshotAsync();

        if (snapshot.Exists)
        {
            // Retrieve and deserialize the 'data' field
            var result = snapshot.GetValue<ICollection<Page>>("data");
            return _mapper.Map<List<PageReadDto>>(result);
        }

        Console.WriteLine("No document found or 'data' field is missing.");
        return new List<PageReadDto>();
    }
}