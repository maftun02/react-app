import React, { useState} from 'react';

const NavBar = () => {
  const [ imageSrc, setImageSrc]=useState('/images/Logo.png')
        return(
          <header>
      <div className="container-fluid mt-3">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <img src={imageSrc} className="navbar-brand" alt="Logo"></img>
            <form>
              <input type="text" placeholder="Search by market" className="input-search"></input>
              <img src={"/images/icon-search.png"} alt="Search" className="search"></img>
            </form>
            <div className="over-navbar">
              <div>
                <p className="text-uzb">O'zbek</p>
              </div>
              <div >
                <img src={"/images/Group 969.png"} alt="969" className="heart"></img>
              </div>
              <div >
                <img src={"/images/Group 968.png"} alt="968" className="box"></img>
              </div>
              <div className="account">
                <img src={"/images/Image.jpg"} alt="image" className="account-image"></img>
              </div>
            </div>
          </div>
        </nav>
        <p className="line"></p>
        

        <nav className="navbar navbar-expand-lg mt-3">
          <div className="container">
            <div className="categories d-flex align-items-center">
              <img src={"/images/icon-menu.png"} alt="menu"></img>
              <p className="navbar-menu">All Categories</p>
            </div>
            <div className="collapse navbar-collapse me-auto">
              <ul className="navbar-nav d-flex align-items-center">
                <li className="navbar-item">
                  <a className="navbar-link navbar-menu">Electronics</a>
                </li>
                <li className="navbar-item">
                  <a className="navbar-link navbar-menu">Appliances</a>
                </li>
                <li className="navbar-item">
                  <a className="navbar-link navbar-menu">Computers</a>
                </li>
                <li className="navbar-item">
                  <a className="navbar-link navbar-menu">Beauty</a>
                </li>
                <li className="navbar-item">
                  <a className="navbar-link navbar-menu">Health</a>
                </li>
                <li className="navbar-item">
                  <a className="navbar-link navbar-menu">Products</a>
                </li>
                <li className="navbar-item">
                  <a className="navbar-link navbar-menu">Children</a>
                </li>
              </ul>
            </div>
            <div className="seller">
              <p className="navbar-menu">Seller</p>
            </div>
            
          </div>
        </nav>
        <p className="line2"></p>
      </div>
    </header>

        )
    }


export default NavBar;