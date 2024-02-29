import React from 'react'
import "./Main1.scss"
import { FaChevronRight } from "react-icons/fa";
import CarPic from "../../images/car.svg"


function Main1() {
    return (
        <div className="main1">
            <div className='main1_div1'>
                <h1 className='h1_first'>Find Your Dream</h1>
                <div>
                    <h1 className='h1_second'>CAR</h1>
                    <button>Order now <FaChevronRight /></button>
                </div>
            </div>
            <div className='main1_div2'>
                <img src={CarPic} alt="" />
            </div>
        </div>
    )
}

export default Main1