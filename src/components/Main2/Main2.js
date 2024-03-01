import React from 'react'
import "./Main2.scss"
import main2_img1 from "../../images/Component 1.png"
import main2_img2 from "../../images/Component 2.png"
import main2_img3 from "../../images/Component 3.png"
import main2_img4 from "../../images/Component 4.png"
import main2_img5 from "../../images/Component 5.png"

function Main2() {
    return (
        <div className='main2'>
            <div className='main2_div1'>
                <div className='main2_title'>
                    <hr />
                    <h1>BRANDS</h1>
                    <hr />
                </div>
                <div className='main2_imgs'>
                    <div>
                        <img src={main2_img1} alt="" />
                    </div>
                    <div>
                        <img src={main2_img2} alt="" />
                    </div>
                    <div>
                        <img src={main2_img3} alt="" />
                    </div>
                    <div>
                        <img src={main2_img4} alt="" />
                    </div>
                    <div>
                        <img src={main2_img5} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main2