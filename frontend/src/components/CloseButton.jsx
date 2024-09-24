import React from 'react';
import '../styles/loginModal.css'


function CloseButton({ onClick }) {
    return (
        <button onClick={onClick} className="close">
            &times;
        </button>
    );
}

export default CloseButton;