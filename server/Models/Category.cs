using System.ComponentModel.DataAnnotations;

namespace Server.Models;

public class Category
{
    //improve id https://github.com/RobThree/IdGen?tab=readme-ov-file 
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }

    public ICollection<Blog> Blogs { get; set; }

    public Category() {
        Blogs = [];
    }
}
