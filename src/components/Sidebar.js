// src/components/Sidebar.js
import React from 'react';
import '../styles/Sidebar.css'

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul>
                <li className='listitem'>Dashboard</li>
                <li className='listitem'>Analytics</li>
                <li className='listitem'>Overview</li>
                <li className='listitem'>Settings</li>
                
            </ul>
        </aside>
    );
}

export default Sidebar;