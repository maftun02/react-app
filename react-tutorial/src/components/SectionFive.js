import React, { useState} from 'react';

const SectionFive = () => {
    const [ imageSrc5, setImageSrc5]=useState('/images/Vector.png')
    return(
<section className="comments-section">
            <div className="container">
                <div className="row all-row">

                    <div className="col-xl-8">
                        <div className="comments-text-box d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start">
                            <p className="all-title">Practice Advice</p>
                            <h2 className="activity-title">Each and every client is important</h2>
                            <p className="activity-text comments-desc col-lg-7">Problems trying to resolve the conflict between
                                the two major realms of Classical physics: Newtonian mechanics</p>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="comments-content-box">
                            <div className="row all-row justify-content-center">

                                <div className="col-xl-4 col-md-6">
                                    <div className="comments-content d-flex flex-column align-items-center text-center">

                                        <div className="stars-box">
                                            <i className="fas fa-star star-icon">
                                                <img src={imageSrc5} alt=""></img>                                            </i>
                                            <i className="fas fa-star star-icon">
                                                <img src={"/images/Vector.png"} alt=""></img>
                                            </i>
                                            <i className="fas fa-star star-icon">
                                            <img src={"/images/Vector.png"} alt=""></img>
                                            </i>
                                            <i className="fas fa-star star-icon">
                                            <img src={"/images/Vector.png"} alt=""></img>
                                            </i>
                                            <i className="far fa-star star-icon">
                                            <img src={"/images/Vector.png"} alt=""></img>
                                            </i>
                                        </div>

                                        <p className="comments-content-desc  col-5">Slate helps you see how many
                                            more days you need to work to reach your financial goal for the month and
                                            year.</p>

                                        <div className="commentator-info">
                                            <img src={"/images/regina.png"} alt="" className="person-ava"></img>
                                            <p className="commentator-name d-flex flex-column align-items-start">Regina
                                                Miles <span className="commentator-job">Designer</span></p>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6">
                                    <div className="comments-content d-flex flex-column align-items-center text-center">

                                        <div className="stars-box">
                                            <i className="fas fa-star star-icon">
                                                <img src={"/images/Vector.png"} alt=""></img>
                                            </i>
                                            <i className="fas fa-star star-icon">
                                            <img src={"/images/Vector.png"} alt=""></img>
                                            </i>
                                            <i className="fas fa-star star-icon">
                                            <img src={"/images/Vector.png"} alt=""></img>
                                            </i>
                                            <i className="fas fa-star star-icon">
                                            <img src={"/images/Vector.png"} alt=""></img>
                                            </i>
                                            <i className="far fa-star star-icon">
                                            <img src={"/images/Vector1.png"} alt=""></img>
                                            </i>
                                        </div>

                                        <p className="comments-content-desc col-5">Slate helps you see how many
                                            more days you need to work to reach your financial goal for the month and
                                            year.</p>

                                        <div className="commentator-info">
                                            <img src={"/images/david.png"} alt="" className="person-ava"></img>
                                            <p className="commentator-name d-flex flex-column align-items-start">David
                                                Anderson <span className="commentator-job">Developer</span></p>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6">
                                    <div className="comments-content d-flex flex-column align-items-center text-center">

                                        <div className="stars-box">
                                            <i className="fas fa-star star-icon">
                                                <img src={"/images/Vector.png"} alt=""></img>
                                            </i>
                                            <i className="fas fa-star star-icon">
                                            <img src={"/images/Vector.png"} alt=""></img>
                                            </i>
                                            <i className="fas fa-star star-icon">
                                            <img src={"/images/Vector.png"} alt=""></img>
                                            </i>
                                            <i className="fas fa-star star-icon">
                                            <img src={"/images/Vector.png"} alt=""></img>
                                            </i>
                                            <i className="far fa-star star-icon">
                                            <img src={"/images/Vector1.png"} alt=""></img>
                                            </i>
                                        </div>

                                        <p className="comments-content-desc col-5">Slate helps you see how many
                                            more days you need to work to reach your financial goal for the month and
                                            year.</p>

                                        <div className="commentator-info">
                                            <img src={"/images/johnson.png"} alt="" className="person-ava"></img>
                                            <p className="commentator-name d-flex flex-column align-items-start">johnson
                                                smith <span className="commentator-job">architect</span></p>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default SectionFive;