import React from 'react'
import "./FeedBack.scss"
import userPic from "../../images/car1.png"
function FeedBack() {
    return (
        <div className='feedback'>
            <div className='feedbackTitle'>
                <hr />
                <h1>Our Coustomer feedback</h1>
                <hr />
            </div>
            <div className='feedback_div1'>
                <div className='feedbackDiv1_div'>
                    <div className='divHeader'>
                        <div className='userPic'>
                            <img src={userPic} alt="" />
                        </div>
                        <div>
                            <h1>Órlaith Parastu</h1>
                            <p>Bought Tesla Model 3  </p>
                        </div>
                    </div>
                    <div className='divFooter'>
                        <p>The listing was hot (more than 170 bids). Everything worked well. We appreciated a simple process.Listing page, chat with a seller, the auction, escrow service – everything was great and we didn’t need anything on top.</p>
                    </div>
                </div>
                <div className='feedbackDiv1_div'>
                    <div className='divHeader'>
                        <div className='userPic'>
                            <img src={userPic} alt="" />
                        </div>
                        <div>
                            <h1>Órlaith Parastu</h1>
                            <p>Bought Tesla Model 3  </p>
                        </div>
                    </div>
                    <div className='divFooter'>
                        <p>The listing was hot (more than 170 bids). Everything worked well. We appreciated a simple process.Listing page, chat with a seller, the auction, escrow service – everything was great and we didn’t need anything on top.</p>
                    </div>
                </div>
                <div className='feedbackDiv1_div'>
                    <div className='divHeader'>
                        <div className='userPic'>
                            <img src={userPic} alt="" />
                        </div>
                        <div>
                            <h1>Órlaith Parastu</h1>
                            <p>Bought Tesla Model 3  </p>
                        </div>
                    </div>
                    <div className='divFooter'>
                        <p>The listing was hot (more than 170 bids). Everything worked well. We appreciated a simple process.Listing page, chat with a seller, the auction, escrow service – everything was great and we didn’t need anything on top.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FeedBack