using AutoMapper;
using Server.DTOs;
using Server.Models;

namespace Server.MappingProfiles;

public class AutoMapperProfile : Profile
{
    public AutoMapperProfile()
    {
        CreateMap<CreateBlogRequest, Blog>()
            .ForMember(dest => dest.Id, opt => opt.Ignore())
            .ForMember(dest => dest.CreatedAt, option => option.Ignore())
            .ForMember(dest => dest.UpdatedAt, option => option.Ignore())
            .ForMember(dest => dest.Categories, option => option.Ignore());

        CreateMap<UpdateBlogRequest, Blog>()
            .ForMember(dest => dest.Id, opt => opt.Ignore())
            .ForMember(dest => dest.CreatedAt, option => option.Ignore())
            .ForMember(dest => dest.UpdatedAt, option => option.Ignore());

        CreateMap<CreateCategoryRequest, Category>();

        CreateMap<Category, AllCategoryResponse>()
            .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
            .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name));
            
    }
}
