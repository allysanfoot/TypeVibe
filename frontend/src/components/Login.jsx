import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/login.css';
import LoginModal from './LoginModal';

// Set the app element for accessibility
Modal.setAppElement('#root');

const Login = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpenModal}>Login</button>
            <LoginModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default Login;
