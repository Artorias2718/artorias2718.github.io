using api.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddSingleton<RootService>();
builder.Services.AddSingleton<AtlasEarthService>();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen()
                .AddControllers();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

var corsPolicyName = "corsPolicy";
builder.Services.AddCors(options =>
{
    options.AddPolicy(corsPolicyName, corsBuilder =>
    {
        var origins = new List<string>
        {
            "https://localhost:5173",
            "http://localhost:5173"
        };
        
        var headers = new[]
        {
            "authorization", "accept", "content-type", "accept-language", "origin"
        };
        
        corsBuilder
        .AllowAnyMethod()
        .WithHeaders(headers)
        .WithExposedHeaders(headers)
        .AllowCredentials()
        .WithOrigins(origins.ToArray());
    });
});

var app = builder.Build();

app.UseHttpsRedirection()
    .UseCors(corsPolicyName);
    
app.MapControllers()
    .WithOpenApi();

app.Run();