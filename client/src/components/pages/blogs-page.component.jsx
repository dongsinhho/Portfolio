import '../../styles/pages-style/blogs-page.component.css'
import blogs_data from '../../mock-data/blog-data.js'
import LinkRef from '../atoms/link-ref'

const Blogs = () => {
    return (
        <div className="container">
            <div className='page-title'>
                <h1>Blog (Notes)</h1>
            </div>
            <div className="blog-list ">
                {blogs_data.map((blog, index) => (
                    <div className="blog-item" key={index}>
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                        <LinkRef text='Read More' link={`${blog.id}`} referrer/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blogs