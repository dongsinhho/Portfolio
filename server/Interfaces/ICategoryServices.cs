using Server.DTOs;
using Server.Models;

namespace Server.Interfaces;

public interface ICategoryServices
{
    Task<IEnumerable<Category>> GetAllAsync();
    Task<Category> GetByIdAsync(int id);
    Task CreateAsync(CreateCategoryRequest request);
    Task DeleteAsync(int id);
}
