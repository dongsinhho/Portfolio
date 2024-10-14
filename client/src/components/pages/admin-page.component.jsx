import React, { useContext } from 'react'
import blogs_data from '../../mock-data/blog-data'
import { useNavigate } from 'react-router-dom'
import LinkRef from '../atoms/link-ref';
import '../../styles/pages-style/admin-page.component.css'
import useAxios from '../../hooks/useAxios';
import { HandleLogout } from '../../api/UserApi';
import { DataContext } from '../../context/DataProvider';

const Admin = () => {
    const axios = useAxios();
    const navigate = useNavigate();
    const dataContext = useContext(DataContext)
    const [, setAccessToken] = dataContext.token

    const handleAddNewBlog = () => {
        navigate('/write')
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