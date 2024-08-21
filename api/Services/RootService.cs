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
    private readonly IMapper _mapper;
    private readonly CollectionReference _collectionRef;

    public RootService(IMapper mapper)
    {
        // Initialize Firestore with your project ID
        FirestoreDb rootDb = FirestoreDb.Create("artorias2718-a309e");
        _mapper = mapper;
        _collectionRef = rootDb.Collection("root");
    }

    public async Task<ICollection<PageReadDto>> Pages()
    {
        DocumentSnapshot snapshot = await _collectionRef.Document("pages").GetSnapshotAsync();

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