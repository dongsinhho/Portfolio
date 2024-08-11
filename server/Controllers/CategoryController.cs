using Microsoft.AspNetCore.Mvc;
using Server.DTOs;
using Server.Interfaces;

namespace Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoryController : ControllerBase
{
    private readonly ICategoryServices _categoryService;
    public CategoryController(ICategoryServices categoryServices)
    {
        _categoryService = categoryServices;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllCategories()
    {
        try
        {
            var categories = await _categoryService.GetAllAsync();
            if (categories == null || !categories.Any())
            {
                return Ok(new
                {
                    message = "No Categories found"
                });
            }
            return Ok(new
            {
                message = "Successfully retrieved all categories",
                data = categories
            });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new
            {
                message = "An error occurred while retrieving all categories",
                error = ex.Message
            });
        }
    }

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> GetCategoryById(Guid id)
    {
        try
        {
            var category = await _categoryService.GetByIdAsync(id);
            if (category == null)
            {
                return NotFound(new
                {
                    message = $"No Category with Id {id} found."
                });
            }
            return Ok(new
            {
                message = $"Successfully retrieved Category Id {id}",
                data = category
            });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new
            {
                message = $"An error occurred while retrieving Category Id {id}",
                error = ex.Message
            });
        }
    }

    [HttpPost]
    public async Task<IActionResult> CreateCategory(CreateCategoryRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        try
        {
            await _categoryService.CreateAsync(request);
            return Ok(new
            {
                message = "Blog account successfully created"
            });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new
            {
                message = "An error occurred while creating new Category",
                error = ex.Message
            });
        }
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> DeleteCategory(Guid id)
    {
        try
        {
            await _categoryService.DeleteAsync(id);
            return Ok(new
            {
                message = "Category successfully deleted"
            });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new
            {
                message = $"An error occurred while delete Category Id {id}",
                error = ex.Message
            });
        }
    }
}
