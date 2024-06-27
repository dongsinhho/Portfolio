import './blog-page.component.css'
import blogs_data from '../../mock-data/blog-data.js'

const Blog = () => {
    return (
        <div className="container">
            <div className='main-content'>
                <div className='page-title'>
                    <h1>Blog (Notes)</h1>
                </div>
                <div className="blog-list ">
                    {blogs_data.map((blog, index) => (
                        <div className="blog-item" key={index}>
                            <h3>{blog.title}</h3>
                            <p>{blog.description}</p>
                            <a href={blog.link} target="_blank" rel="noopener noreferrer">Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog