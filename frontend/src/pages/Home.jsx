import React from 'react'
import Navigation from '../components/Navigation'
import myImage from '../images/image.png'
import '../styles/home.css'

function Home() {
    return (
        <div>
            <Navigation />
            <div style={{
                backgroundImage: `url(${myImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '50vh'
            }}>
                sickO MODE
            </div>

        </div>
    )
}

export default Home