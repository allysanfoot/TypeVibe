import React from 'react';
import '../styles/loginModal.css'

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className='overlay'>
            <div className='modal'>
                <h2>Login</h2>
                <button className='closeButton' onClick={onClose}>
                    &times;
                </button>
                {/* Your login form goes here */}
            </div>
        </div>
    );
};

export default LoginModal;