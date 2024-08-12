using FirebaseAdmin;
using Google.Apis.Auth.OAuth2;
namespace api.Services;

public class FirebaseInitializer
{
    public static void InitializeFirebase()
    {
        FirebaseApp.Create(new AppOptions()
        {
            Credential = GoogleCredential.FromFile("firebase.json"),
        });
    }
}