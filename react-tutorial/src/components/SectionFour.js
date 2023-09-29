import React, { useState} from 'react';

const SectionFour = () => {
    const [ imageSrc4, setImageSrc4]=useState('/images/coolicon.png')
    return(
<section className="pricing-section">
            <div className="container">
                <div className="row all-row">
                    <div className="col-xl-8">
                        <div className="activity-text-box">
                            <p className="all-title">Practice Advice</p>
                            <h2 className="activity-title">Pricing</h2>
                            <p className="activity-text">Problems trying to resolve the conflict between the two
                                <br></br> major realms of Classical physics:Newtonian  mechanics</p>
                        </div>
                    </div>

                   <div className="col-12">
                      <div className="pricing-content-box">
                        <div className="row all-row d-flex justify-content-center">
                         
                            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-11">
                                <div className="pricing-content d-flex flex-column align-items-center align-items-xl-start text-center text-xl-start">
                                  <p className="pricing-content-icon">
                                    <i className="fas fa-heart">
                                        <img src={imageSrc4} alt=""></img>
                                    </i>
                                  </p>
                                  <p className="pricing-content-title">FREE</p>
                                  <p className="pricing-desc col-xl-7">Organize across all apps by hand</p>
                                  <p className="pricing-num d-flex flex-column align-items-xl-start align-items-center">
                                    0$
                                    <span>Per Month</span>
                                  </p>
                                  <p className="pricing-desc-2">Slate helps you see how many more days you need...</p>
                                  <a href="#" className="try-link">Try for free</a>
                                  <ul className="pricing-content-features-box d-flex flex-column align-items-start">
                                    <li className="pricing-content-future">
                                        <img src={"/images/green-tick.svg"} alt="" className="tick-icon"></img>
                                        Unlimited product updates
                                    </li>
                                    <li className="pricing-content-future">
                                        <img src={"/images/green-tick.svg"} alt="" className="tick-icon"></img>
                                        Unlimited product updates
                                    </li>
                                    <li className="pricing-content-future">
                                        <img src={"/images/green-tick.svg"} alt="" className="tick-icon"></img>
                                        Unlimited product updates
                                    </li>
                                    <li className="pricing-content-future">
                                        <img src={"/images/gray-tick.svg"} alt="" className="tick-icon"></img>
                                        1GB Cloud storage
                                    </li>
                                    <li className="pricing-content-future">
                                        <img src={"/images/gray-tick.svg"} alt="" className="tick-icon"></img>
                                        Email and community support
                                    </li>
                                  </ul>
                                </div>
                            </div>

                            <div className ="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-11">
                                <div className="pricing-content d-flex flex-column align-items-center align-items-xl-start text-center text-xl-start new-feature">
                                  <p className="pricing-content-icon">
                                    <i className="fas fa-heart">
                                        <img src={"/images/coolicon.png"} alt=""></img>
                                    </i>
                                  </p>
                                  <p className="pricing-content-title">PRO</p>
                                  <p className="pricing-desc col-xl-7">Organize across all apps by hand</p>
                                  <p className="pricing-num d-flex flex-column align-items-xl-start align-items-center">
                                    39$
                                    <span>Per Month</span>
                                  </p>
                                  <p className="pricing-desc-2">Slate helps you see how many more days you need...</p>
                                  <a href="#" className="try-link">Try for Pro</a>
                                  <ul className="pricing-content-features-box d-flex flex-column align-items-start">
                                    <li className="pricing-content-future">
                                        <img src={"/images/green-tick.svg"} alt="" className="tick-icon"></img>
                                        Unlimited product updates
                                    </li>
                                    <li className="pricing-content-future">
                                        <img src={"/images/green-tick.svg"} alt="" className="tick-icon"></img>
                                        Unlimited product updates
                                    </li>
                                    <li className="pricing-content-future">
                                        <img src={"/images/green-tick.svg"} alt="" className="tick-icon"></img>
                                        Unlimited product updates
                                    </li>
                                    <li className="pricing-content-future">
                                        <img src={"/images/green-tick.svg"} alt="" className="tick-icon"></img>
                                        1GB Cloud storage
                                    </li>
                                    <li className="pricing-content-future">
                                        <img src={"/images/gray-tick.svg"} alt="" className="tick-icon"></img>
                                        Email and community support
                                    </li>
                                  </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5 col-md-6 col-sm-9 col-11">
                                <div className="pricing-content d-flex flex-column align-items-center align-items-xl-start text-center text-xl-start">
                                  <p className="pricing-content-icon">
                                    <i className="fas fa-heart">
                                        <img src={"/images/coolicon.png"} alt=""></img>
                                    </i>
                                  </p>
                                  <p className="pricing-content-title">PREMIUM</p>
                                  <p className="pricing-desc col-xl-7">Organize across all apps by hand</p>
                                  <p className="pricing-num d-flex flex-column align-items-xl-start align-items-center">
                                    59$
                                    <span>Per Month</span>
                                  </p>
                                  <p className="pricing-desc-2">Slate helps you see how many more days you need...</p>
                                  <a href="#" className="try-link">Try Premium</a>
                                  <ul className="pricing-content-features-box d-flex flex-column align-items-start">
                                    <li className="pricing-content-future">
                                        <img src={"/images/green-tick.svg"} alt="" className="tick-icon"></img>
                                        Unlimited product updates
                                    </li>
                                    <li className="pricing-content-future">
                                        <img src={"/images/green-tick.svg"} alt="" className="tick-icon"></img>
                                        Unlimited product updates
                                    </li>
                                    <li className="pricing-content-future">
                                        <img src={"/images/green-tick.svg"} alt="" className="tick-icon"></img>
                                        Unlimited product updates
                                    </li>
                                    <li className="pricing-content-future">
                                        <img src={"/images/green-tick.svg"} alt="" className="tick-icon"></img>
                                        1GB Cloud storage
                                    </li>
                                    <li className="pricing-content-future">
                                        <img src={"/images/green-tick.svg"} alt="" className="tick-icon"></img>
                                        Email and community support
                                    </li>
                                  </ul>
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

export default SectionFour;