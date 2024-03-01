import React from 'react'
import "./OurServer.scss"
import { IoCarSportOutline } from "react-icons/io5";


function OurServer() {
    return (
        <div className='ourserver'>
            <div className='servertitle'>
                <hr />
                <h1>Our Services</h1>
                <hr />
            </div>
            <div className="server_text">
                <p className='P'>We Provide many of the best servises for you  and you will get the best benefits here</p>
            </div>
            <div className='serverCard'>
                <div>
                    <IoCarSportOutline className='carIcon' />
                    <h3>Top Buy & sell Car</h3>
                    <p>we Provide many of the best servises for you  and you will get the best benefits here </p>
                </div>
                <div>
                    <IoCarSportOutline className='carIcon' />
                    <h3>Top Buy & sell Car</h3>
                    <p>we Provide many of the best servises for you  and you will get the best benefits here </p>
                </div>
                <div>
                    <IoCarSportOutline className='carIcon' />
                    <h3>Top Buy & sell Car</h3>
                    <p>we Provide many of the best servises for you  and you will get the best benefits here </p>
                </div>
            </div>
        </div>
    )
}

export default OurServer