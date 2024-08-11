using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Server.Models;

namespace Server.AppDataContext;

public class ApplicationDbContext : IdentityDbContext<IdentityUser>
{
    private readonly DbSettings _dbSettings;

    public ApplicationDbContext(IOptions<DbSettings> dbSettings)
    {
        _dbSettings = dbSettings.Value;
    }

    // DbSet property to represent the Blog table
    public DbSet<Blog> Blogs { get; set; }
    public DbSet<Category> Categories { get; set; }


    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(_dbSettings.ConnectionString);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Blog>().ToTable("Blog").HasKey(x => x.Id);
        base.OnModelCreating(modelBuilder);
    }
}
