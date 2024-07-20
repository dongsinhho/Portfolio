import React from 'react'
import '../../styles/molecules-style/scroll-top.css'

const ScrollTop = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button onClick={handleScrollToTop} className='scroll-top'>
            <svg xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
                ></path>
            </svg>
            <span>Back to Top</span>
        </button>
    )
}

export default ScrollTop