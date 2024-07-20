import React from 'react'
import blogs_data from '../../mock-data/blog-data'
import { useNavigate } from 'react-router-dom'
import LinkRef from '../atoms/link-ref';
import '../../styles/pages-style/admin-page.component.css'

const Admin = () => {

    const navigate = useNavigate();

    const handleAddNewBlog = () => {
        navigate('/write')
    }

    return (
        <div className='container'>
            <div className='page-title'>
                <h1>Blog manager</h1>
            </div>
            <button className='add-blog' onClick={handleAddNewBlog}> ADD NEW BLOG</button>
            <div className="admin-blog-list">
                {blogs_data.map((blog, index) => (
                    <div className="admin-blog-item" key={index}>
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                        <LinkRef text='Edit' link={`${blog.id}`} referrer />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Admin