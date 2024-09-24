import React from 'react';
import '../styles/loginModal.css'
import CloseButton from './CloseButton';

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className='overlay'>
            <div className='modal'>
                <CloseButton onClick={onClose} />
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
                        <p><a className='login-link' href='#'>Trouble logging in?</a></p>
                    </label>
                    <button className='login-button' type='submit'>
                        Login
                    </button>
                </form>
                <button className='register-button' type='submit'>
                    Don't have an account? Sign up
                </button>

            </div>
        </div>
    );
};

export default LoginModal;