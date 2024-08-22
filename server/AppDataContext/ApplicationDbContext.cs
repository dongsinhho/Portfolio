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
        modelBuilder.Entity<Blog>(entity =>
        {
            entity.HasMany(x => x.Categories)
                .WithMany(y => y.Blogs)
                .UsingEntity(j => j.ToTable("BlogCategory"));
        });

        modelBuilder.Entity<Blog>(entity =>
        {
            entity.ToTable("Blog").HasKey(x => x.Id);
            entity.Property(x => x.CreatedAt).HasDefaultValueSql("now()");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.ToTable("Category").HasKey(x => x.Id);
            entity.HasIndex(x => x.Name).IsUnique();
        });
        base.OnModelCreating(modelBuilder);
    }
}
