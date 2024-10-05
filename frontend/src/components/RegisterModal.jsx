import React, { useState } from 'react';
import CloseButton from './CloseButton';
import { register } from '../api/auth';

const RegisterModal = (props) => {
    const { open, setLoginOpen, setSignupOpen } = props;
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    if (!open) return null;

    const switchLogin = (event) => {
        setSignupOpen(false)
        setLoginOpen(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Get form data
        const formData = new FormData(e.target);
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');
        // Check if passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // Call the register function from the backend
        try {
            const response = await register(username, email, password);
            console.log('User has been registered', response.data);
        } catch (error) {
            console.error('Registration error', error);
        }
    }

    return (
        <div className='overlay'>
            <div className='modal'>
                <CloseButton onClick={(event) => { setSignupOpen(false) }} />
                <h2>Register for an account</h2>
                {/* Register form goes here */}
                <form onSubmit={handleSubmit}>
                    <label>
                        Username
                        <br />
                        <input 
                            type='text' 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label>
                        Email
                        <br />
                        <input 
                            type='email' 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        Password
                        <br />
                        <input 
                            type='password' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <label>
                        Confirm Password
                        <br />
                        <input 
                            type='password' 
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </label>
                    <button className='login-button' type='submit'>
                        Register
                    </button>
                </form>
                <button className='register-button' type='submit' onClick={switchLogin}>
                    Already have an account? Log in
                </button>
            </div>
        </div>
    );
};

export default RegisterModal