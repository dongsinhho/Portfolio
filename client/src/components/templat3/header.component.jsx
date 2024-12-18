import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import '../../styles/template-style/header.component.css';
import { DataContext } from '../../context/DataProvider';

const Header = () => {
    const mode = () => {
        if (localStorage.getItem('dark-mode') === 'true') {
            return 'dark';
        }
        else {
            return 'light';
        }
    }

    const [theme, setTheme] = useState(mode);
    const dataContext = useContext(DataContext)
    const [accessToken,] = dataContext.token

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('dark-mode', theme === 'dark');
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <header>
            <div className='navbar'>
                <div className="logo">
                    <Link to="/">💻<span className='bracket'>{"<"}</span>hnds<span className='dot'>.</span>dev<span className='bracket'>{"/>"}</span></Link>
                </div>
                <div className='nav-links'>
                    <nav>
                        <ul>
                            <li><Link className='link' to="about">ABOUT</Link></li>
                            <li><Link className='link' to="blog">BLOG</Link></li>
                            <li><Link className='link' to="projects">PROJECTS</Link></li>
                            {
                                accessToken &&
                                <li><Link className='link' to="admin">ADMIN</Link></li>
                            }
                        </ul>
                    </nav>
                    <div className='theme' onClick={toggleTheme}>
                        <label>
                            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"></path>
                                <path d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"></path>
                            </svg>
                            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"></path>
                                <path d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"></path>
                            </svg>
                        </label>
                    </div>
                </div>

            </div>
        </header>
    )
}

export default Header;