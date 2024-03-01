import React, { useState } from 'react'
import "./Navbar.scss"
import logo from "../../images/logo.png"
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";


function Navbar() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };
    return (
        <div className='nav'>
            <ul>
                <li><Link to="/main1page">menu 1</Link></li>
                <li><Link to="/main2page">menu 2</Link></li>
                <li><Link to="/main3page">menu 3</Link></li>
            </ul>
            <div className="nav_logo">
                <img src={logo} alt="CAR dealership" />
            </div>
            <ul>
                <li><Link to="/main4page">menu 4</Link></li>
                <li><Link to="/main5page">menu 5</Link></li>
                <li><Link to="/main6page">menu 6</Link></li>
            </ul>
            <div onClick={toggleSidebar} className='barsIcon'>
                <FaBarsStaggered />

            </div>
            <div className={`siteBar ${sidebarVisible ? 'visible' : ''}`}>

                <li>Menu 1</li>
                <li>Menu 1</li>
                <li>Menu 1</li>
                <li>Menu 1</li>
                <li>Menu 1</li>
                <li>Menu 1</li>

            </div>
        </div >
    )
}

export default Navbar