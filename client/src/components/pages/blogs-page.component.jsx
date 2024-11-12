import '../../styles/pages-style/blogs-page.component.css'
import blogs_data from '../../mock-data/blog-data.js'
import LinkRef from '../atoms/link-ref'
import { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios.js';
import { GetAllBlogs } from '../../api/BlogApi.js';
import Loader from '../atoms/loader.jsx';

const Blogs = () => {
    const axios = useAxios();
    const [blogList, setBlogList] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const res = await GetAllBlogs(axios);
                setBlogList(res.data);
            }
            catch (err) {
                setBlogList(blogs_data);
            }
        }
        getCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [setBlogList]);

    return (
        <div className="container">
            <div className='page-title'>
                <h1>Blog (Notes)</h1>
            </div>
            {
                blogList ?
                    <div className="blog-list ">
                        {blogList.map((blog, index) => (
                            <div className="blog-item" key={index}>
                                <h3>{blog.title}</h3>
                                <p>{blog.description}</p>
                                <LinkRef text='Read More' link={`${blog.id}`} referrer />
                            </div>
                        ))}
                    </div>
                    :
                    <Loader />
            }

        </div>
    )
}

export default Blogs