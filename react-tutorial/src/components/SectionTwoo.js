import React, { useState} from 'react';

const SectionTwoo = () => {
    const [ imageSrc2, setImageSrc2]=useState('/images/thumb-concept-7.png')
    return(
<section className="medicine-section">
                <div className="container">
                    <div className="row gap-5 gap-lg-0 d-flex justify-content-center">
                        <div className="col-lg-5 col-10 d-flex align-items-center">
                           <div className="medicine-text-box d-flex flex-column align-items-center align-items-lg-start text-lg-start text-start">
                            <h2 className="medicine-title">Leading Medicine</h2>
                            <p className="medicine-desc col-lg-8">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
                            <a className="medicine-link">
                                Learn More
                                <i className="far fa-chevron-right"></i>
                            </a>
                           </div>
                        </div>

                        <div className="col-7">
                            <div className="medicine-img-box">
                                <img src={imageSrc2} alt="section2" className="medicine-img"></img>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}


export default SectionTwoo;