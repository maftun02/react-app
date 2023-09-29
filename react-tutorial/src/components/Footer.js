import React from 'react';

const Footer = () => {
    return(
        <footer>
        <section className="footer-content-box">
            <div className="container">
                <div className="row all-row d-flex justify-content-center">

                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="footer-content d-flex flex-column align-items-center align-items-lg-start">
                            <p className="footer-content-title">Company Info</p>

                            <ul className="footer-links-list text-lg-start text-center d-flex flex-column align-items-center align-items-lg-start p-0">
                                <li><a href="#" className="footer-link ">About Us</a></li>
                                <li><a href="#" className="footer-link ">Carrier</a></li>
                                <li><a href="#" className="footer-link ">We are hiring</a></li>
                                <li><a href="#" className="footer-link ">Blog</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6">
                        <div className="footer-content d-flex flex-column align-items-center align-items-lg-start">
                            <p className="footer-content-title">Legal</p>

                            <ul
                                className="footer-links-list text-lg-start text-center d-flex flex-column align-items-center align-items-lg-start p-0">
                                <li><a href="#" className="footer-link ">About Us</a></li>
                                <li><a href="#" className="footer-link ">Carrier</a></li>
                                <li><a href="#" className="footer-link ">We are hiring</a></li>
                                <li><a href="#" className="footer-link ">Blog</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6">
                        <div className="footer-content d-flex flex-column align-items-center align-items-lg-start">
                            <p className="footer-content-title">Features</p>

                            <ul className="footer-links-list text-lg-start text-center d-flex flex-column align-items-center align-items-lg-start p-0">
                                <li><a href="#" className="footer-link">Business Marketing</a></li>
                                <li><a href="#" className="footer-link">User Analytic</a></li>
                                <li><a href="#" className="footer-link">Live Chat</a></li>
                                <li><a href="#" className="footer-link">Unlimited Support</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6">
                        <div className="footer-content d-flex flex-column align-items-center align-items-lg-start">
                            <p className="footer-content-title">Resources</p>

                            <ul
                                className="footer-links-list text-lg-start text-center d-flex flex-column align-items-center align-items-lg-start p-0">
                                <li><a href="#" className="footer-link">IOS & Android</a></li>
                                <li><a href="#" className="footer-link">Watch a Demo</a></li>
                                <li><a href="#" className="footer-link">Customers</a></li>
                                <li><a href="#" className="footer-link">API</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div className="footer-content d-flex flex-column align-items-center align-items-lg-start">
                            <p className="footer-content-title">Get In Touch</p>

                            <ul
                                className="footer-links-list text-lg-start text-center d-flex flex-column align-items-center align-items-lg-start p-0">
                                <li><a href="tel: +998998173066" className="footer-link ">(99) 817-3066</a></li>
                                <li><a href="#!" className="footer-link">4517 Washington Ave. Manchester,
                                        Kentucky 39495</a></li>
                                <li><a href="#" className="footer-link ">debra.holt@example.com</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <div className="footer-copyright-box">
            <div className="container">
                <div className="row justify-content-center gap-4 gap-lg-0">

                    <div className="col-lg-6">
                        <p className="footer-copyright-desc text-center text-lg-start">Made With Love By
                            <span>REDFOX</span>. All Right Reserved</p>
                    </div>

                    <div className="col-lg-6">
                        <div className="footer-web-links d-flex justify-content-lg-end justify-content-center gap-4">
                            <a href="#!" className="footer-web-link">f</a>
                            <a href="#!" className="footer-web-link">in</a>
                            <a href="#!" className="footer-web-link">tw</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    </footer>

    )
}

export default Footer;