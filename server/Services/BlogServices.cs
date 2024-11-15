using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Server.AppDataContext;
using Server.DTOs;
using Server.Interfaces;
using Server.Models;

namespace Server.Services;

public class BlogServices : IBlogServices
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<BlogServices> _logger;
    private readonly IMapper _mapper;

    public BlogServices(ApplicationDbContext context, ILogger<BlogServices> logger, IMapper mapper)
    {
        _context = context;
        _logger = logger;
        _mapper = mapper;
    }

    public async Task CreateAsync(CreateBlogRequest request)
    {
        try
        {
            var blog = _mapper.Map<Blog>(request);
            blog.CreatedAt = DateTime.UtcNow;
            blog.Categories = await _context.Categories
            .Where(c => request.Categories.Contains(c.Id))
            .ToListAsync();

            _context.Blogs.Add(blog);
            await _context.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "An error occurred while creating new Blog");
            throw new Exception("An error occurred while creating new Blog");
        }
    }

    public async Task DeleteAsync(Guid id)
    {
        var blog = await _context.Blogs.FindAsync(id);
        if (blog == null)
        {
            throw new KeyNotFoundException($"No Blog with Id {id} found");
        }
        else
        {
            _context.Blogs.Remove(blog);
            await _context.SaveChangesAsync();
        }
    }

    public async Task<IEnumerable<Blog>> GetAllAsync()
    {
        var blogs = await _context.Blogs.Include(bc => bc.Categories).ToListAsync();
        if (blogs == null)
        {
            throw new Exception("No Blogs found");
        }
        else
        {
            return blogs;
        }
    }

    public async Task<Blog> GetByIdAsync(Guid id)
    {
        var blog = await _context.Blogs.Include(bc => bc.Categories)
                                        .FirstOrDefaultAsync(b => b.Id == id);
        if (blog == null)
        {
            throw new KeyNotFoundException($"No blog with Id {id} found.");
        }
        return blog;
    }

    public async Task UpdateAsync(Guid id, UpdateBlogRequest request)
    {
        try
        {
            var blog = await _context.Blogs.FindAsync(id);
            if (blog == null)
            {
                throw new KeyNotFoundException($"No blog with Id {id} found.");
            }
            if (request.Title != null)
            {
                blog.Title = request.Title;
            }
            if (request.Description != null)
            {
                blog.Description = request.Description;
            }
            if (request.Categories != null)
            {
                blog.Categories = request.Categories;
            }
            if (request.Content != null)
            {
                blog.Content = request.Content;
            }
            blog.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "An error occurred while update Category");
            throw new Exception($"An error occurred while update Category Id {id}");
        }

    }
}
