// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>Dashboard</li>
                    <li>Home</li>
                    <li>Profile</li>
                    <li>Notifications</li>
                    <li>Contact us</li>
                </ul>
            </nav>
            <div className="user-profile">
                <img src="https://th.bing.com/th/id/OIP.xo-BCC1ZKFpLL65D93eHcgAAAA?rs=1&pid=ImgDetMain" alt="User Profile" />
            </div>
        </header>
    );
}

export default Header;