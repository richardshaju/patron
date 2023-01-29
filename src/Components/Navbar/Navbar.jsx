import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    const handleNavbar = () => {
        setIsNavbarOpen(!isNavbarOpen);
    }
    const [color, setColor] = useState('');

    const listenScrollEvent = () => {
       if (window.scrollY > 200) {
          setColor('rgba(0, 0, 0, 10');
       } else {
          setColor('');
       }
    };
    useEffect(() => {
       window.addEventListener('scroll', listenScrollEvent);
    })
    return (
        <div style={{ backgroundColor: color}} className={`navbar ${isNavbarOpen ? 'responsive' : ''}`}>
            <div className="brand">
                hiii
            </div>
            <div className={isNavbarOpen ? 'left' : 'right'}>
                <a href="#"> <br /></a>
                <a href="#" style={{color:'white'}}>Home</a>
                <a href="#">About Us</a>
                <a href="#">Gallery</a>
                <a href="#">Contact Us</a>
                <a href="#" className="icon" onClick={handleNavbar}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
        </div>
    );
}


export default Navbar