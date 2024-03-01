import React from 'react'
import "./Explore.scss"
import CarModel from "../../images/car1.svg"
import CarModel2 from "../../images/car2.svg"
import { Data } from '../../staticData.js'

function Explore() {
    return (
        <div className='explore'>
            <div className='explore_div'>
                <div className='explore_title'>
                    <hr />
                    <h1>Explore</h1>
                    <hr />
                </div>
                <div className='explore_car_types'>
                    <li>Car & Minivan</li>
                    <li>Trucks</li>
                    <li>Crossovers 7 SUVs</li>
                    <li>Electrified</li>
                </div>
                <div className='explore_infor'>
                    <div className='infor_div1'>
                        <div className='card_title'>
                            <h1>Tesla Model 3</h1>
                            <p>Used</p>
                        </div>
                        <div className='card_text'>
                            <div>
                                <p>Model Year:</p>
                                <p>Model</p>
                                <p>Fuel</p>
                            </div>
                            <div>
                                <p>2023</p>
                                <p>LC76</p>
                                <p>Petrol</p>
                            </div>
                        </div>
                        <div className='card_price'>
                            <h1>$36.32</h1>
                        </div>
                        <div className='card_btn'>
                            <button>
                                Order now
                            </button>
                        </div>
                        <div className='img_div'>
                            <img src={CarModel} alt="" />
                        </div>
                    </div>

                    <div className='infor_div2'>
                        <div className='card_title'>
                            <h1>Tesla Model 3</h1>
                            <p>Used</p>
                        </div>
                        <div className='card_text'>
                            <div>
                                <p>Model Year:</p>
                                <p>Model</p>
                                <p>Fuel</p>
                            </div>
                            <div>
                                <p>2023</p>
                                <p>LC76</p>
                                <p>Petrol</p>
                            </div>
                        </div>
                        <div className='card_price'>
                            <h1>$36.32</h1>
                        </div>
                        <div className='card_btn'>
                            <button>
                                Order now
                            </button>
                        </div>
                        <div className='img_div'>
                            <img src={CarModel2} alt="" />
                        </div>
                    </div>
                </div>
                <div className='mediaCard'>
                    {
                        Data.map((item) => (
                            <div key={item.id} className='cardInfor'>
                                <div className='cardImg'>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className='cardTitle'>
                                    <h1>{item.modelName}</h1>
                                    <p>{item.text}</p>
                                </div>
                                <div className='cardData'>
                                    <p>{item.modelYear}</p>
                                    <p>{item.model}</p>
                                    <p>{item.fuel}</p>
                                </div>
                                <div className="cardBtn">
                                    <button>Order Now</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Explore