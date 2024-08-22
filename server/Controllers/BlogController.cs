using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Server.DTOs;
using Server.Interfaces;

namespace Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BlogController : ControllerBase
{
    private readonly IBlogServices _blogServices;

    public BlogController(IBlogServices blogServices)
    {
        _blogServices = blogServices;
    }

    [HttpPost]
    [Authorize]
    public async Task<IActionResult> CreateBlog(CreateBlogRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        try
        {
            await _blogServices.CreateAsync(request);
            return Ok(new
            {
                message = "Blog account successfully created"
            });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new
            {
                message = "An error occurred while creating new Blog",
                error = ex.Message
            });
        }
    }

    [HttpGet]
    public async Task<IActionResult> GetAllBlogs()
    {
        try
        {
            var blog = await _blogServices.GetAllAsync();
            if (blog == null || !blog.Any())
            {
                return Ok(new
                {
                    message = "No Blogs found"
                });
            }
            return Ok(new
            {
                message = "Successfully retrieved all blogs",
                data = blog
            });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new
            {
                message = "An error occurred while retrieving all blogs",
                error = ex.Message
            });
        }
    }

    [HttpGet("{id:guid}")]
    public async Task<IActionResult> GetBlogById(Guid id)
    {
        try
        {
            var blog = await _blogServices.GetByIdAsync(id);
            if (blog == null)
            {
                return NotFound(new
                {
                    message = $"No Blog item with Id {id} found."
                });
            }
            return Ok(new
            {
                message = $"Successfully retrieved Blog with Id {id}",
                data = blog
            });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new
            {
                message = $"An error occurred while retrieving blog with Id {id}",
                error = ex.Message
            });
        }
    }

    [HttpDelete("{id:guid}")]
    [Authorize]
    public async Task<IActionResult> DeleteBlog(Guid id)
    {
        try
        {
            await _blogServices.DeleteAsync(id);
            return Ok(new
            {
                message = "Blog successfully deleted"
            });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new
            {
                message = $"An error occurred while delete Blog Id {id}",
                error = ex.Message
            });
        }
    }

    [HttpPut("{id:guid}")]
    [Authorize]
    public async Task<IActionResult> UpdateBlog(Guid id, UpdateBlogRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        try
        {
            await _blogServices.UpdateAsync(id, request);
            return Ok(new
            {
                message = $"Blog with id {id} successfully updated"
            });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new
            {
                message = $"An error occurred while update blog id {id}",
                error = ex.Message
            });
        }

    }
}
