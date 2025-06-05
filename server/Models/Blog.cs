using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models;

public class Blog
{
    //https://code4shares.wordpress.com/2017/08/10/toi-uu-sql-phan-10-lai-la-cau-chuyen-ve-guid-id/
    [Key]
    public Guid Id { get; set; }
    public required string Title { get; set; }
    public required string Description { get; set; }
    public required string Content { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public ICollection<Category> Categories { get; set; }

    [Required]
    [MaxLength(200)]
    public required string Slug { get; set; }

    public Blog()
    {
        Categories = [];
    }
}
