import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../../styles/pages-style/login-page.component.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()

    const onButtonClick = () => {
        // Set initial error values to empty
        setEmailError('')
        setPasswordError('')

        // Check if the user has entered both fields correctly
        if ('' === email) {
            setEmailError('Please enter your email')
            return
        }

        if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError('Please enter a valid email')
            return
        }

        if ('' === password) {
            setPasswordError('Please enter a password')
            return
        }

        if (password.length <= 7) {
            setPasswordError('The password must be 8 characters or longer')
            return
        }

        // Authentication calls will be made here...
        navigate('/admin')
    }
    return (
        <div className='container'>
            <div className='page-title'>
                <h1>Login</h1>
            </div>
            <div className='login-content'>
                <div className='inputContainer'>
                    <input
                        value={email}
                        placeholder="Email"
                        onChange={(ev) => setEmail(ev.target.value)}
                        className='inputBox'
                        type='email'
                    />
                    <label className="errorLabel">{emailError}</label>
                </div>
                <br />
                <div className='inputContainer'>
                    <input
                        value={password}
                        placeholder="Password"
                        onChange={(ev) => setPassword(ev.target.value)}
                        className='inputBox'
                        type='password'
                    />
                    <label className="errorLabel">{passwordError}</label>
                </div>
                <br />
                <div className='inputContainer'>
                    <button className='inputButton' onClick={onButtonClick}>
                        <div>
                            <p>LOGIN</p>
                            <svg viewBox="0 0 44.952 44.952">
                                <path fill="currentColor" d="M44.952,22.108c0-1.25-0.478-2.424-1.362-3.308L30.627,5.831c-0.977-0.977-2.561-0.977-3.536,0 c-0.978,0.977-0.976,2.568,0,3.546l10.574,10.57H2.484C1.102,19.948,0,21.081,0,22.464c0,0.003,0,0.025,0,0.028 c0,1.382,1.102,2.523,2.484,2.523h35.182L27.094,35.579c-0.978,0.978-0.978,2.564,0,3.541c0.977,0.979,2.561,0.978,3.538-0.001 l12.958-12.97c0.885-0.882,1.362-2.059,1.362-3.309C44.952,22.717,44.952,22.231,44.952,22.108z"></path>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Login