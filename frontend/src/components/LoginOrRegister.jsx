import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/login.css';

// import components
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

// Set the app element for accessibility
Modal.setAppElement('#root');

const LoginOrRegister = (props) => {
    const [loginOpen, setLoginOpen] = useState(false)
    const [signupOpen, setSignupOpen] = useState(false)

    const handleLogin = () => {
        setLoginOpen(true)
    }

    return (
        <div>
            <button className='login-or-register' onClick={handleLogin}>CREATE ACCOUNT OR LOG IN</button>
            <LoginModal open={loginOpen} setLoginOpen={setLoginOpen} setSignupOpen={setSignupOpen} />
            <RegisterModal open={signupOpen} setLoginOpen={setLoginOpen} setSignupOpen={setSignupOpen} />
        </div>
    );
};

export default LoginOrRegister;
