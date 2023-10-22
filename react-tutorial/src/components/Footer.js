import React, {useState} from 'react';

const Footer = () => {
    const [ imageSrc2, setImageSrc2]=useState('/images/icon-facebook.svg')
    return(
        <footer>
      <div className="container d-flex justify-content-between align-items-center pt-4">
      <div>
        <p className="footer-text">2022 © UzMeiTao</p>
      </div>
      <div className="terms mt-4">
        <a href="#">Terms of use</a>
        <a href="#" className="mt-3">Mobile version</a>
      </div>
      <div className="choose mt-4">
        <a href="#">How to choose a product</a>
        <a href="#" className="mt-3">Feedback</a>
      </div>
      <div className="service mt-4">
        <a href="#">Service help</a>
        <a href="#" className="mt-3">Contacts</a>
      </div>
      <div className="net d-flex">
        <img src={imageSrc2} alt="icon-facebook" className="me-2"></img>
        <img src={"/images/icon-vk.svg"} alt="vk" className="me-2"></img>
        <img src={"/images/icon-instagram.svg"} alt="inst"></img>
      </div>
    </div>
    </footer>
    )
}

export default Footer;