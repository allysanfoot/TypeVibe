import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navigation.css'

import Login from './Login'

function Navigation() {
    return (
        <div>
            <nav className='navigation'>
                <ul className='navigation-list'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
                <Login />
            </nav>
        </div>
    )
}

export default Navigation