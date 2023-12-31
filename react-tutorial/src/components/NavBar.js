import React, { useState} from 'react';

const NavBar = () => {
  const [ imageSrc, setImageSrc]=useState('/images/none.png')
        return(
          <header className="container-fluid">
            <nav className="navbar navbar-expand-lg header_nav">
              <div className="container mt-3">
                <a className="navbar-brand logo">MedicalFunc</a>
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav d-flex align-items-center me-auto">
                    <li className="navbar-item ">
                      <a className="navbar-link header_link active">Home</a>
                    </li>
                    <li className="navbar-item">
                      <a className="navbar-link header_link">Product</a>
                    </li>
                    <li className="navbar-item">
                      <a className="navbar-link header_link">Pricing</a>
                    </li>
                    <li className="navbar-item">
                      <a className="navbar-link header_link">Contact</a>
                    </li>
                  </ul>
                  <div className="header_end-link d-flex align-items-center">
                    <a className="login-link">Login</a>
                    <a className="join-link">JOIN US <img src={"/images/Vector.svg"} alt=''></img></a>
                  </div>
                </div>
              </div>
            </nav>
            <div className="container" style={{marginTop: '70px'}} >
            <div className="row d-flex justify-content-center">
                <div className="col-md-5">
                    <h5>Welcome</h5>
                    <h1>Online Appoinment</h1>
                    <h4>Medical Functional is most focused in helping you 
                        discover your most beauiful smile</h4>
                        <div className="cta">
                            <a href="#" className="quote-now">Get Quote Now</a>
                            <a href="#" className="learn">Learn More</a>
                        </div>
                </div>
                <div className="col-md-7">
                        <img src={imageSrc} alt=""></img>
                </div>
            </div>
        </div>
         </header>
        )
    }


export default NavBar;