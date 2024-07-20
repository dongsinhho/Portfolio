import React from 'react'
import { useNavigate } from 'react-router-dom';

import '../../styles/molecules-style/go-back.css'

const GoBack = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    };

    return (
        <button onClick={handleGoBack} className='go-back'>
            <svg xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"
                ></path>
            </svg>
            <span>Go back</span>
        </button>
    )
}


export default GoBack