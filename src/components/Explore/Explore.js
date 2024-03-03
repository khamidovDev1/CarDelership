import React, { useState } from 'react'
import "./Explore.scss"
import CarModel from "../../images/car1.png"
import CarModel2 from "../../images/car2.png"
import { Data } from '../../staticData.js'
import { TruckData } from '../../staticData.js'
import { Crossovers } from '../../staticData.js'
import { Electrified } from '../../staticData.js'

function Explore() {
    const [getCard, setCard] = useState(Data)
    function ChangeCard() {
        setCard(TruckData)
    }
    function ChangeCard2() {
        setCard(Data)
    }
    function ChangeCard3() {
        setCard(Crossovers)
    }
    function ChangeCard4() {
        setCard(Electrified)
    }

    // for (let i = 0; i < items.length; i++) {
    //     itemsList.push(<div key={i}>{items[i]}</div>);
    // }



    return (
        <div className='explore'>
            <div className='explore_div'>
                <div className='explore_title'>
                    <hr />
                    <h1>Explore</h1>
                    <hr />
                </div>
                <div className='explore_car_types'>
                    <li onClick={ChangeCard2}>Car & Minivan</li>
                    <li onClick={ChangeCard}>Trucks</li>
                    <li onClick={ChangeCard3}>Crossovers 7 SUVs</li>
                    <li onClick={ChangeCard4}>Electrified</li>
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
                        getCard.map((item) => (
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
                                    <p>{item.price}</p>
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