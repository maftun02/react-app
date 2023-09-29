import React, { useState} from 'react';

const SectionThree = () => {
    const [ imageSrc3, setImageSrc3]=useState('/images/doctor-img.png')
    return(
<section className="doctors-section">
            <div className="container">
                <div className="row all-row">
                <div className="col-xl-8">
                    <div className="activity-text-box">
                        <p className="all-title">Practice Advice</p>
                        <h2 className="activity-title">Our Doctors Specialize In You</h2>
                        <p className="activity-text">Problems trying to resolve the conflict between <br></br>
                            the two major realms of Classical physics:<br></br>Newtonian  mechanics</p>
                    </div>
                </div>

                <div className="col-12">
                    <div className="doctors-content-box">
                        <div className="row gap-5 gap-xl-0 d-flex justify-content-center">
                            <div className="col-xl-4 col-lg-5 col-md-7 col-sm-9 col-10">
                                <div className="doctors-content d-flex flex-column align-items-center">
                                    <div className="doctors-img-box">
                                        <img src={imageSrc3} alt="" className="doctor-img"></img>
                                        <p className="sale-word">sale</p>
                                        <div className="doctors-content-links">
                                            <button className="like-btn">btn</button>
                                            <a href="#" className="buy-link">asd</a>
                                            <a href="#" className="view-link">asd</a>
                                        </div>
                                    </div>
                                    <div className="doctors-text-box d-flex flex-column align-items-center align-items-xl-start">
                                        <div className="marks-box w-100 d-flex justify-content-between align-items-center">
                                            <p className="location-name">English Departement</p>
                                            <p className="mark-ball">4.9</p>
                                        </div>
                                        <p className="doctors-job">main doctor</p>
                                        <p className="doctors-content-desc text-center  text-xl-start"> We focus ergonomics and meeting you where you work. It's only a keystroke away.</p>
                                        <p className="sales-num"> 15 Sales</p>
                                        <p className="price-num disabled">
                                            $16.48
                                            <span>$6.48</span>
                                        </p>
                                        <div className="doctors-content-features-box d-flex justify-content-xl-start justify-content-center w-100">
                                            <p className="doctors-feature">22hr 30min</p>
                                            <p className="doctors-feature">64 Lessons</p>
                                            <p className="doctors-feature">Progress</p>
                                        </div>
                                        <a href="#" className="doctors-content-learn-link">Learn More</a>
                                    </div>
                                   </div>
                                </div>
                            

                            <div className="col-xl-4 col-lg-5 col-md-7 col-sm-9 col-10">
                                <div className="doctors-content d-flex flex-column align-items-center">
                                    <div className="doctors-img-box">
                                        <img src={"/images/nurse-img.png"} alt="" className="doctor-img"></img>
                                        <p className="sale-word">sale</p>
                                        <div className="doctors-content-links">
                                            <button className="like-btn">btn</button>
                                            <a href="#" className="buy-link">asd</a>
                                            <a href="#" className="view-link">asd</a>
                                        </div>
                                    </div>
                                    <div className="doctors-text-box d-flex flex-column align-items-center align-items-xl-start">
                                        <div className="marks-box w-100 d-flex justify-content-between align-items-center">
                                            <p className="location-name">English Departement</p>
                                            <p className="mark-ball">4.9</p>
                                        </div>
                                        <p className="doctors-job">young nurse</p>
                                        <p className="doctors-content-desc text-center  text-xl-start"> We focus ergonomics and meeting you where you work. It's only a keystroke away.</p>
                                        <p className="sales-num"> 28 Sales</p>
                                        <p className="price-num disabled">
                                            $32.48
                                            <span>$13.48</span>
                                        </p>
                                        <div className="doctors-content-features-box d-flex justify-content-xl-start justify-content-center w-100">
                                            <p className="doctors-feature">22hr 30min</p>
                                            <p className="doctors-feature">64 Lessons</p>
                                            <p className="doctors-feature">Progress</p>
                                        </div>
                                        <a href="#" className="doctors-content-learn-link">Learn More</a>
                                    </div>
                                   </div>
                                </div>
                            

                            <div className="col-xl-4 col-lg-5 col-md-7 col-sm-9 col-10">
                                <div className="doctors-content d-flex flex-column align-items-center">
                                    <div className="doctors-img-box">
                                        <img src={"/images/equipment-img.png"} alt="" className="doctor-img"></img>
                                        <p className="sale-word">sale</p>
                                        <div className="doctors-content-links">
                                            <button className="like-btn">btn</button>
                                            <a href="#" className="buy-link">asd</a>
                                            <a href="#" className="view-link">asd</a>
                                        </div>
                                    </div>
                                    <div className="doctors-text-box d-flex flex-column align-items-center align-items-xl-start">
                                        <div className="marks-box w-100 d-flex justify-content-between align-items-center">
                                            <p className="location-name">English Departement</p>
                                            <p className="mark-ball">4.9</p>
                                        </div>
                                        <p className="doctors-job">new equipment</p>
                                        <p className="doctors-content-desc text-center  text-xl-start"> We focus ergonomics and meeting you where you work. It's only a keystroke away.</p>
                                        <p className="sales-num"> 28 Sales</p>
                                        <p className="price-num disabled">
                                            $55.48
                                            <span>$38.48</span>
                                        </p>
                                        <div className="doctors-content-features-box d-flex justify-content-xl-start justify-content-center w-100">
                                            <p className="doctors-feature">22hr 30min</p>
                                            <p className="doctors-feature">64 Lessons</p>
                                            <p className="doctors-feature">Progress</p>
                                        </div>
                                        <a href="#" className="doctors-content-learn-link">Learn More</a>
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
    export default SectionThree;