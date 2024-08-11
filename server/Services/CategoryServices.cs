using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Server.AppDataContext;
using Server.Models;
using Server.Interfaces;
using Server.DTOs;

namespace Server;

public class CategoryServices : ICategoryServices
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<CategoryServices> _logger;
    private readonly IMapper _mapper;
    public CategoryServices(ApplicationDbContext context, ILogger<CategoryServices> logger, IMapper mapper) {
        _context = context;
        _logger = logger;
        _mapper = mapper;
    }
    public async Task CreateAsync(CreateCategoryRequest request)
    {
        try {
            var category = _mapper.Map<Category>(request);
            _context.Categories.Add(category);
            await _context.SaveChangesAsync();
        }
        catch (Exception ex) {
            _logger.LogError(ex, "An error occurred while creating new Category");
            throw new Exception("An error occurred while creating new Category");
        }
    }

    public async Task DeleteAsync(Guid id)
    {
        var category = await _context.Categories.FindAsync(id);
        if (category == null) {
            throw new KeyNotFoundException($"No category with Id {id} found.");
        }
        else {
            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();
        }
    }

    public async Task<IEnumerable<Category>> GetAllAsync()
    {
        var categories = await _context.Categories.ToListAsync();
        if (categories == null) {
            throw new KeyNotFoundException($"No category found.");
        }
        else {
            return categories;
        }
    }

    public async Task<Category> GetByIdAsync(Guid id)
    {
        var category = await _context.Categories.FindAsync(id);
        if (category == null) {
            throw new KeyNotFoundException($"No category with Id {id} found.");
        }
        else {
            return category;
        }
    }
}
