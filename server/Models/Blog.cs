using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models;

public class Blog
{
    //https://code4shares.wordpress.com/2017/08/10/toi-uu-sql-phan-10-lai-la-cau-chuyen-ve-guid-id/
    [Key]
    public Guid Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string Content { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public ICollection<Category> Categories { get; set; }

    public Blog()
    {
        Categories = [];
    }
}
