import React from 'react';
import './style.css';

const Header = (props) =>{
    return (
        <div className="header">
            <nav className="headerMenu">
                <a href="#" > Home</a>
                <a href="#" > About Us</a>
                <a href="#" > Contact Us</a>
                <a href="#" > </a>
            </nav>
            <div>
                social media links
            </div>
        </div>
    )
}

export default Header;


