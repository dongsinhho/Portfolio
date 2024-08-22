using System.ComponentModel.DataAnnotations;
using Server.Models;

namespace Server.DTOs;

public class UpdateBlogRequest
{
    [StringLength(100)]
    public string Title { get; set; }
    [StringLength(100)]
    public string Description { get; set; }
    public ICollection<Category> Categories { get; set; }
    [StringLength(int.MaxValue - 2, MinimumLength = 2)]
    public string Content { get; set; }

}
