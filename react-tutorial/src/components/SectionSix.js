import React from 'react';

const SectionSix = () => {
    return(
        <section className="join-us-section">
            <div className="container">
                <div className="row all-row d-flex justify-content-center">

                    <div className="col-12">
                        <div className="join-us-text-box d-flex flex-column align-items-center text-center">
                            <p className="all-title-before">Newsletter</p>

                            <h2 className="join-title all-title text-uppercase">JOIN US</h2>

                            <p className="join-desc col-lg-5">Problems trying to resolve the conflict between
                                the two major realms of Classical physics: Newtonian mechanics </p>
                        </div>
                    </div>

                    <div className="col-xl-8">
                        <form action=""
                            className="subsribe-box d-flex flex-column flex-md-row align-items-center justify-content-center">
                            <input type="email" className="email__input" placeholder="Your Email"></input>
                            <input type="submit" className="subsribe__btn" value="Subscribe"></input>
                        </form>
                    </div>

                </div>
            </div>
        </section>

    )
}

export default SectionSix;