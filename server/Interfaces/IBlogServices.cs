using Server.DTOs;
using Server.Models;

namespace Server.Interfaces;

public interface IBlogServices
{
    Task<IEnumerable<Blog>> GetAllAsync();
    Task<Blog> GetByIdAsync(Guid id);
    Task CreateAsync(CreateBlogRequest request);
    Task UpdateAsync(Guid id, UpdateBlogRequest request);
    Task DeleteAsync(Guid id);
}
