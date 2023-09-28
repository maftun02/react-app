import React, { useState} from 'react';


const SectionOne = () => {
    const [ imageSrc1, setImageSrc1]=useState('/images/emergency-case.svg')
    return(
        <main>
        <section className="all_section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="activity-text-box">
                            <p className="all-title">Practice Advice</p>
                            <h2 className="activity-title">Our Activity</h2>
                            <p className="activity-text">Problems trying to resolve the conflict between <br></br>
                                the two major realms of Classical physics: Newtonian <br></br> mechanics</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="activity-content_box">
                            <div className="row activity-content-row">
                                <div className="col-lg-4 col-md-6 col-sm-8 ">
                                    <div className="activity-content">
                                        <img src={imageSrc1} alt="emergency" className="activity-content-icon"></img>
                                        <p className="activity-content-title">Emergency Case</p>
                                        <p className="red-line"></p>
                                        <p className="activity-content-desc">The gradual <br></br>accumulation of <br></br>information about</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-8">
                                    <div className="activity-content">
                                        <img src={"/images/health-queries.svg"} alt="" className="activity-content-icon"></img>
                                        <p className="activity-content-title">Health Queries</p>
                                        <p className="red-line"></p>
                                        <p className="activity-content-desc">The gradual <br></br>accumulation of <br></br>information about</p>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-8">
                                    <div className="activity-content">
                                        <img src={"/images/painless.svg"} alt="" className="activity-content-icon"></img>
                                        <p className="activity-content-title">Painless Procedures</p>
                                        <p className="red-line"></p>
                                        <p className="activity-content-desc">The gradual <br></br>accumulation of <br></br>information about</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    )
}




export default SectionOne;