import React from 'react'
import "./Main1_footer.scss"

import { IoChevronDown } from "react-icons/io5";




function Main1_footer() {
    return (
        <div role="navigation" className="primary-navigation">
            <ul className='ul'>
                <li className='li'><a href="#">Home <IoChevronDown className='chevron' /></a>
                    <ul className="dropdown">
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">Illustration</a></li>
                        <li><a href="#">Iconography</a></li>
                    </ul></li>
                <li className='li'><a href="#">Work &dtrif; <IoChevronDown className='chevron' /></a>
                    <ul className="dropdown">
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">Illustration</a></li>
                        <li><a href="#">Iconography</a></li>
                    </ul>
                </li>
                <li className='li'><a href="#">About <IoChevronDown className='chevron' /></a>
                    <ul className="dropdown">
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">Illustration</a></li>
                        <li><a href="#">Iconography</a></li>
                    </ul></li>
                <li className='li'><a href="#">Contact <IoChevronDown className='chevron' /></a>
                    <ul className="dropdown">
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">Web Design</a></li>
                        <li><a href="#">Illustration</a></li>
                        <li><a href="#">Iconography</a></li>
                    </ul></li>
            </ul>
        </div>
    )
}

export default Main1_footer