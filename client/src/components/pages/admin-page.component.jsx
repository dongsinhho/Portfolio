import React, { useContext, useEffect, useState } from 'react'
import blogs_data from '../../mock-data/blog-data'
import { useNavigate } from 'react-router-dom'
import '../../styles/pages-style/admin-page.component.css'
import useAxios from '../../hooks/useAxios';
import { HandleLogout } from '../../api/UserApi';
import { DataContext } from '../../context/DataProvider';
import { DeleteBlogById, GetAllBlogs } from '../../api/BlogApi';
import Loader from '../atoms/loader';

const Admin = () => {
    const axios = useAxios();
    const navigate = useNavigate();
    const dataContext = useContext(DataContext)
    const [, setAccessToken] = dataContext.token
    const [blogList, setBlogList] = useState([]);

    const getBlogData = async () => {
        try {
            const res = await GetAllBlogs(axios);
            setBlogList(res.data);
        }
        catch (err) {
            setBlogList(blogs_data);
        }
    }

    useEffect(() => {

        getBlogData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAddNewBlog = () => {
        navigate('/write')
    }

    const handleEditBlog = (id) => {
        navigate(`/write/${id}`)
    }

    const handleDeleteBlog = async (id) => {
        try {
            var res = await DeleteBlogById(axios, id);
            if (res && res.status === 200) {
                alert(`Delete blog ${id} successfully`)
                await getBlogData();
            }
        }
        catch (err) {
            alert(`Delete blog ${id} fail`)
        }
    }

    const handleLogout = () => {
        HandleLogout(axios)
        axios.deleteRefreshTokenFromCookie()
        setAccessToken('')
    }

    return (
        <div className='container'>
            <div className='page-title'>
                <h1>Blog manager</h1>
            </div>
            <div className='list-button'>
                <button className='admin-button' onClick={handleAddNewBlog}>New blog</button>
                <button className='admin-button' onClick={handleLogout}>Log out</button>
            </div>
            <div className="admin-blog-list">
                {
                    blogList ?
                        blogList.map((blog, index) => (
                            <div className="admin-blog-item" key={index}>
                                <div>
                                    <h3>{blog.title}</h3>
                                    <p>{blog.description}</p>
                                    <div>
                                        <div className='action-list' onClick={() => handleEditBlog(blog.id)}>Edit</div>
                                        <div className='action-list' onClick={() => handleDeleteBlog(blog.id)}>Delete</div>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        <Loader />
                }
            </div>
        </div>
    )
}

export default Admin