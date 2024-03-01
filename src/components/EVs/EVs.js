import React from 'react'
import "./EVs.scss"
import evsImg from "../../images/car3.png"
function EVs() {
    return (
        <div className='evs'>
            <div className='evs_div'>
                <div className='evs_divText'>
                    <h1>EVs For Everyone</h1>
                    <p>we Provide many of the best servises for you  and you will get the best benefits here </p>
                    <button>Read more </button>
                </div>
                <div className='evs_img'>
                    <img src={evsImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default EVs