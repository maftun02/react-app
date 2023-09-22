import React from "react";

const NavBar = () => {
  const [imageSrc, setImageSrc]=useState('../../react-tutorial/public/Vector.svg')
        return(
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
                    <a className="login-link" href="#">Login</a>
                    <a className="join-link">JOIN US <img src="{imageSrc}" alt="vector"></img></a>
                  </div>
                </div>
              </div>
            </nav>

        )
    }


export default NavBar;