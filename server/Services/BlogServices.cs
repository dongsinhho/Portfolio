﻿using AutoMapper;
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

    public async Task<Guid> CreateAsync(CreateBlogRequest request)
    {
        try
        {
            var blog = _mapper.Map<Blog>(request);
            blog.CreatedAt = DateTime.UtcNow;
            blog.Categories = await _context.Categories
                .Where(c => request.Categories.Contains(c.Id))
                .ToListAsync();

            // Sinh slug nếu chưa có
            if (string.IsNullOrWhiteSpace(blog.Slug))
            {
                blog.Slug = GenerateSlug(blog.Title);
            }
            // Đảm bảo slug là unique
            var baseSlug = blog.Slug;
            int i = 1;
            while (await _context.Blogs.AnyAsync(b => b.Slug == blog.Slug))
            {
                blog.Slug = $"{baseSlug}-{i}";
                i++;
            }

            _context.Blogs.Add(blog);
            await _context.SaveChangesAsync();
            return blog.Id;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "An error occurred while creating new Blog");
            throw new Exception("An error occurred while creating new Blog");
        }
    }

    private static string GenerateSlug(string title)
    {
        if (string.IsNullOrWhiteSpace(title)) return "blog";
        var slug = title.ToLowerInvariant()
            .Normalize(System.Text.NormalizationForm.FormD)
            .Replace("\u0300-\u036f", "")
            .Replace("[^a-z0-9]+", "-")
            .Trim('-');
        slug = System.Text.RegularExpressions.Regex.Replace(slug, "[^a-z0-9-]", "");
        slug = System.Text.RegularExpressions.Regex.Replace(slug, "-+", "-");
        return slug;
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

    public async Task<Blog?> GetBySlugAsync(string slug)
    {
        var blog = await _context.Blogs.Include(bc => bc.Categories)
            .FirstOrDefaultAsync(b => b.Slug == slug);
        return blog;
    }

    public async Task UpdateAsync(Guid id, UpdateBlogRequest request)
    {
        try
        {
            var blog = await _context.Blogs.Include(bc => bc.Categories).FirstOrDefaultAsync(b => b.Id == id);
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
            if (request.Content != null)
            {
                blog.Content = request.Content;
            }
            blog.Categories.Clear();
            blog.UpdatedAt = DateTime.UtcNow;
            _context.Blogs.Update(blog);
            await _context.SaveChangesAsync();

            if (request.Categories != null)
            {
                foreach (var categoryId in request.Categories)
                {
                    var category = await _context.Categories.FindAsync(categoryId);
                    if (category != null)
                    {
                        blog.Categories.Add(category);
                    }
                }
            }
            _context.Blogs.Update(blog);
            await _context.SaveChangesAsync();
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "An error occurred while update Category");
            throw new Exception($"An error occurred while update Category Id {id}");
        }
    }
}
