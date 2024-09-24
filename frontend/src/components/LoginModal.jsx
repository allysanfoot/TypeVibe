import React from 'react';
import '../styles/loginModal.css'

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className='overlay'>
            <div className='modal'>
                <h2>Log in to your account</h2>
                {/* Login form goes here */}
                <form>
                    <label>
                        Email
                        <br />
                        <input type='email' />
                    </label>
                    <label>
                        Password
                        <br />
                        <input type='password' />
                    </label>
                    <button className='login-button' type='submit'>
                        Login
                    </button>
                </form>
                <p>Don't have an account? <a href='#'>Sign up</a></p>
                <p>Forgot your password? <a href='#'>Reset password</a></p>
                <button className='close' onClick={onClose}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default LoginModal;