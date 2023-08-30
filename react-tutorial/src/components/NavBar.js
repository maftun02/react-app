import React from "react";

const NavBar = () => {
        return(
            <nav className="navbar">
               <div className="container">
               <a className="navbar-brand" style={{fontFamily: "Montserrat", fontSize: "24px",fontWeight: "700",lineHeight: "32px",letterSpacing: "0.10000000149011612px",textAlign: "left"}} href="#">MedicalFunc</a>
                 <ul className="navbar-nav">
                   <li className="nav-item">
                    <a className="nav-link">Home</a>
                    <a className="nav-link">Product</a>
                    <a className="nav-link">Pricing</a>
                    <a className="nav-link">Contact</a>
                   </li>
                 </ul>

                 <div>
                    <a href="#">Login</a>
                    <button>Join Us <img src="./"></img></button>
                 </div>
               </div>
            </nav>
        )
    }


export default NavBar;