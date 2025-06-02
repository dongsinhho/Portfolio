using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using Server;
using Server.AppDataContext;
using Server.Interfaces;
using Server.Middleware;
using Server.Services;

var  MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

// https://tedu.com.vn/lap-trinh-aspnet-core/vong-doi-cua-dependency-injection-transient-singleton-va-scoped-257.html
// https://learn.microsoft.com/en-us/aspnet/core/fundamentals/minimal-apis/middleware?view=aspnetcore-8.0

// Singleton
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();                                                       // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.Configure<DbSettings>(builder.Configuration.GetSection("DbSettings")); // Điều này nói với DI container rằng bất cứ khi nào có yêu cầu về IOptions<DbSettings>, nó nên cung cấp một instance được cấu hình với các thiết lập từ appsettings.json.
var allowedOrigins = builder.Configuration.GetSection("AllowedOrigins").Get<string[]>();
builder.Services.Configure<RouteOptions>(options => options.LowercaseUrls = true);

builder.Services.AddExceptionHandler<GlobalExceptionHandler>();
//builder.Services.AddProblemDetails();
builder.Services.AddLogging();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            // false = tự cấp token
            ValidateIssuer = false,
            ValidateAudience = false,
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("FreeCourseDemoASPNETCoreWebAPI22"))
        };
    });
 // In some cases, the call to AddAuthentication is automatically made by other extension methods. For example, when using ASP.NET Core Identity, AddAuthentication is called internally.
builder.Services.AddAuthorization();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins(allowedOrigins ?? Array.Empty<string>())
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
        });
});

// Scoped
builder.Services.AddScoped<IBlogServices, BlogServices>();
builder.Services.AddScoped<ICategoryServices, CategoryServices>();
builder.Services.AddIdentityApiEndpoints<IdentityUser>()
    .AddEntityFrameworkStores<ApplicationDbContext>();

// Trasient
builder.Services.AddTransient<ApplicationDbContext>();
builder.Services.AddControllers();
builder.Services.AddControllers().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
});

var app = builder.Build();

// {
//     using var scope = app.Services.CreateScope();
//     var context = scope.ServiceProvider;
// }

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();
app.UseCors(MyAllowSpecificOrigins);
app.UseAuthentication(); // default minimal API called
app.UseAuthorization();  // default minimal API called

app.MapControllers();
app.MapIdentityApi<IdentityUser>();

app.MapPost("/logout", async (SignInManager<IdentityUser> signInManager) =>
{
    await signInManager.SignOutAsync().ConfigureAwait(false);
}).RequireAuthorization();

app.Run();

// Turn off authentication Schema JWT. use JWT instead of default