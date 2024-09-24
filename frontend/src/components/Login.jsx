import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/login.css';

// import components
import LoginModal from './LoginModal';
import Register from './Register';
import RegisterModal from './RegisterModal';

// Set the app element for accessibility
Modal.setAppElement('#root');

const Login = (props) => {
    const [loginOpen, setLoginOpen] = useState(false)
    const [signupOpen, setSignupOpen] = useState(false)

    const handleLogin = () => {
        setLoginOpen(true)
    }

    const handleSignup = () => {
        setSignupOpen(true)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <LoginModal open={loginOpen} setLoginOpen={setLoginOpen} setSignupOpen={setSignupOpen} />
            {/* <RegisterModal open={signupOpen} setLoginOpen={setLoginOpen} setSignupOpen={setSignupOpen} /> */}
        </div>
    );
};

export default Login;
