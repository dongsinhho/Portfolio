using System.ComponentModel.DataAnnotations;

namespace Server.DTOs;

public class CreateCategoryRequest
{
    [Required]
    [StringLength(100)]
    public required string Name { get; set; } 
}
