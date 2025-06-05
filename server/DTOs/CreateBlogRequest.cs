using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Server.Models;

namespace Server.DTOs;

public class CreateBlogRequest
{
    [Required]
    [StringLength(100)]
    public required string Title { get; set; }
    [Required]
    [StringLength(100)]
    public required string Description { get; set; }
    [ListHasElements]
    public required List<int> Categories { get; set; }
    [Required]
    [StringLength(int.MaxValue - 2, MinimumLength = 2)]
    public required string Content { get; set; }
    [StringLength(200)]
    public string? Slug { get; set; } // Optional, server sẽ tự sinh nếu không có

}


public class ListHasElements : ValidationAttribute
{
    protected override ValidationResult IsValid(object? value, ValidationContext validationContext)
    {
        if (value is not IList list || list.Count == 0)
        {
            return new ValidationResult("The list must contain at least one element.");
        }
        return ValidationResult.Success!;
    }
}