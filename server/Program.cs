using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.ApplicationModels;
using Microsoft.EntityFrameworkCore;
using Server;
using Server.AppDataContext;
using Server.Interfaces;
using Server.Middleware;
using Server.Services;

var builder = WebApplication.CreateBuilder(args);

// https://tedu.com.vn/lap-trinh-aspnet-core/vong-doi-cua-dependency-injection-transient-singleton-va-scoped-257.html

// Singleton
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();                                                       // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.Configure<DbSettings>(builder.Configuration.GetSection("DbSettings")); // Điều này nói với DI container rằng bất cứ khi nào có yêu cầu về IOptions<DbSettings>, nó nên cung cấp một instance được cấu hình với các thiết lập từ appsettings.json.
builder.Services.Configure<RouteOptions>(options => options.LowercaseUrls = true); 
builder.Services.AddSingleton<ApplicationDbContext>();
builder.Services.AddExceptionHandler<GlobalExceptionHandler>();
builder.Services.AddProblemDetails();
builder.Services.AddLogging();
builder.Services.AddAuthorization();

// Scoped
builder.Services.AddScoped<IBlogServices, BlogServices>();
builder.Services.AddScoped<ICategoryServices, CategoryServices>();
builder.Services.AddIdentityApiEndpoints<IdentityUser>()
    .AddEntityFrameworkStores<ApplicationDbContext>();

// Trasient
builder.Services.AddControllers();

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

app.UseAuthorization();

app.UseAuthentication();

app.MapControllers();
app.MapIdentityApi<IdentityUser>();

//app.MapPost("/logout") https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity-api-authorization?view=aspnetcore-8.0#use-token-based-authentication

app.Run();

// add category 