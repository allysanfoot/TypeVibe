import React from 'react'
import { useState } from 'react';

import '../styles/collapsibleMenu.css';

export const CollapsibleMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-item">
                <button onClick={toggleMenu} className="menu-toggle">
                    <span><i class='bx bx-menu'></i></span>
                </button>

                {/* Collapsible menu */}
                {isOpen && (
                    <div className="dropdown-content">
                        <ul>
                            <li><a href="#enneagram">Enneagram Personality Test</a></li>
                            <li><a href="#16types">16 Types Personality Test</a></li>
                            <li><a href="#bigfive">Big Five Personality Test</a></li>
                            <li><a href="#disc">DISC Personality Test</a></li>
                            <li><a href="#career">Career Aptitude Test</a></li>
                            <li><a href="#love">7 Love Styles Test</a></li>
                            <li><a href="#emotional">Emotional Intelligence Test</a></li>
                            <li><a href="#workplace">Tests for the Workplace</a></li>
                            <li><a href="#alltests">All Tests & Quizzes</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default CollapsibleMenu;
