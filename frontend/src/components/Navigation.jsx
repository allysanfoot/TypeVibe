import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navigation.css'

// import components
import LoginOrRegister from './LoginOrRegister'
import { CollapsibleMenu } from './CollapsibleMenu'

// import images
import logo from '../images/favicon.png'

function Navigation() {
    return (
        <div>
            <nav className='navigation'>
                <ul className='navigation-list'>
                    <li>
                        <img src={logo} alt='logo' className='logo' />
                    </li>
                    <CollapsibleMenu />
                </ul>
                <LoginOrRegister />
            </nav>
        </div>
    )
}

export default Navigation