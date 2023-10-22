import React, {useState} from 'react';


class Main extends React. Component{
    constructor(props) {
        super(props);

        this.state ={
            number: 0,
        }
    }
    render(){
        const incrementNumber = () =>{
            this.setState({number: this.state.number + 1})
        }
        const decrementNumber = () =>{
            if (this.state.number > 0){
                this.setState({number: this.state.number - 1})
            }
            
        }
    const [ imageSrc1, setImageSrc1]=useState('/images/vector.png')
    return(
        <main>
      <div className="container-fluid mt-3">
        <div className="container">
          <div className="group130">
            <p className="home">Home</p>
            <img src={imageSrc1} alt="vector" className="vector"></img>
            <p className="carthome">Cart</p>
          </div>
          <p className="cart-main">Cart</p>

          <section className="mt-4">
            <div className="row">
              <div className="col-md-12 box-border">
                <div className="select">
                  <input type="checkbox" className="checkbox"></input>
                  <p className="text-select">Select all product</p>
                </div>
                <div className="bascet">
                  <img src={"/images/trash-2.svg"} alt="trash-2" ></img>
                </div>
              </div>
            </div>
          </section>

          <section className="general-box mt-4 mb-4">
            <div className="row  main-box">
              <div className="col-md-12 section-box">
                <div className="shop">
                  <input type="checkbox" className="checkbox me-4" ></input>
                  <img src={"/images/store 1.svg"} alt="store" className="store me-2"></img>
                  <p className="shop-name">Shop name 1</p>
                </div>
                <div className="bascet">
                  <img src={"images/trash-2.svg"} alt="trash-2"></img>
                </div>
              </div>

              <div className="col-md-12 section-b mt-4">
                <div className="shop-section mb-4">
                  <input type="checkbox" className="checkbox me-4" checked></input>
                  <img src={"images/image (2).png"} alt="phone" className="phone"></img>
                  <div className="price ms-3">
                     <p className="telephone">Smartphone iPhone 11 128GB</p>
                     <p className="usd">USD 1100</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center mb-4">
                <div className="dropdown me-4">
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">Color</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item active" href="#">Red</a></li>
                    <li><a className="dropdown-item" href="#">Blue</a></li>
                    <li><a className="dropdown-item" href="#">Green</a></li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">Size</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item active" href="#">XS</a></li>
                    <li><a className="dropdown-item" href="#">XL</a></li>
                    <li><a className="dropdown-item" href="#">XLL</a></li>
                  </ul>
                </div>
              </div>
                <div className="button-numbers d-flex mb-4">
                  <button type="button" className="button-minus-plus me-3" onClick={decrementNumber}>-</button>
                  <p>{this.state.number}</p>
                  <button type="button" class="button-minus-plus ms-3" onClick={incrementNumber}>+</button>
                </div>
              </div>


              <div className="col-md-12 section-b mt-4">
                <div className="shop-section mb-4">
                  <input type="checkbox" className="checkbox me-4" ></input>
                  <img src={"/images/image (3).png"} alt="sneakers" className="phone"></img>
                  <div className="price ms-4">
                     <p className="telephone">ASICS Patriot 8 sneakers</p>
                     <p className="usd">USD 150</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center mb-4">
                <div className="dropdown me-4">
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">Color</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item active" href="#">Red</a></li>
                    <li><a className="dropdown-item" href="#">Blue</a></li>
                    <li><a className="dropdown-item" href="#">Green</a></li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">Size</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item active" href="#">XS</a></li>
                    <li><a className="dropdown-item" href="#">XL</a></li>
                    <li><a className="dropdown-item" href="#">XLL</a></li>
                  </ul>
                </div>
              </div>
                <div className="button-numbers d-flex mb-4">
                  <button type="button" className="button-minus-plus me-3" onClick={decrementNumber}>-</button>
                  <p>1</p>
                  <button type="button" className="button-minus-plus ms-3" onClick={incrementNumber}>+</button>
                </div>
              </div>
                  
              <div className="col-md-12 section-box">
                <div className="shop">
                  <input type="checkbox" className="checkbox me-4" ></input>
                  <img src={"/images/store 1.svg"} alt="store" className="store me-2"></img>
                  <p className="shop-name">Shop name 2</p>
                </div>
                <div className="bascet">
                  <img src={"/images/trash-2.svg"} alt="trash-2"></img>
                </div>
              </div>

              <div className="col-md-12 section-b mt-4">
                <div className="shop-section mb-4">
                  <input type="checkbox" className="checkbox me-4" ></input>
                  <img src={"/images/image (2).png"} alt="phone" className="phone"></img>
                  <div className="price ms-3">
                     <p className="telephone">Smartphone iPhone 11 128GB</p>
                     <p className="usd">USD 1100</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center mb-4">
                <div className="dropdown me-4">
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">Color</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item active" href="#">Red</a></li>
                    <li><a className="dropdown-item" href="#">Blue</a></li>
                    <li><a className="dropdown-item" href="#">Green</a></li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">Size</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item active" href="#">XS</a></li>
                    <li><a className="dropdown-item" href="#">XL</a></li>
                    <li><a className="dropdown-item" href="#">XLL</a></li>
                  </ul>
                </div>
              </div>
                <div className="button-numbers d-flex mb-4">
                  <button type="button" className="button-minus-plus me-3" onClick={decrementNumber}>-</button>
                  <p>1</p>
                  <button type="button" className="button-minus-plus ms-3" onClick={incrementNumber}>+</button>
                </div>
              </div>


              <div className="col-md-12 section-b mt-4">
                <div className="shop-section mb-4">
                  <input type="checkbox" className="checkbox me-4" ></input>
                  <img src={"/images/image (3).png"} alt="sneakers" className="phone"></img>
                  <div className="price ms-4">
                     <p className="telephone">ASICS Patriot 8 sneakers</p>
                     <p className="usd">USD 150</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center mb-4">
                <div className="dropdown me-4">
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">Color</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item active" href="#">Red</a></li>
                    <li><a className="dropdown-item" href="#">Blue</a></li>
                    <li><a className="dropdown-item" href="#">Green</a></li>
                  </ul>
                </div>
                <div className="dropdown">
                  <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">Size</button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item active" href="#">XS</a></li>
                    <li><a className="dropdown-item" href="#">XL</a></li>
                    <li><a className="dropdown-item" href="#">XLL</a></li>
                  </ul>
                </div>
              </div>
                <div className="button-numbers d-flex mb-4 counter">
                  
                  <button type="button" className="button-minus-plus me-3" onClick={decrementNumber}>-</button>
                  <p>1</p>
                  <button type="button" className="button-minus-plus ms-3" onClick={incrementNumber}>+</button>
                </div>
              </div>

              <div className="col-md-12 section-box d-flex align-items-center">
                <div className="free">
                  <img src={"/images/icon-delivery.svg"} alt="delivery" className="store me-2"></img>
                  <p className="delivery-text">Free delivery from:</p>
                  <p className="date">2 to 7 days</p>
                </div>
                <div className="delivery">
                  <p className="delivery-text">Expected delivery:</p>
                  <p className="date">Dec 9 - Dec 11</p>
                </div>
              </div>

              
            </div>
          </section>
          <aside className="acces">
            <div className="product d-flex justify-content-between mb-3">
              <p className="aside-text">Product</p>
              <p className="aside-price">1</p>
            </div>
            <div className="amount d-flex justify-content-between mb-3">
              <p className="aside-text">Amount</p>
              <p className="aside-price">$ 1250</p>
            </div>
            <div className="total d-flex justify-content-between mb-4">
              <p className="aside-text">Total</p>
              <p className="aside-price">$1250</p>
            </div>
            <button type="button" className="checkout-btn">Checkout</button>
          </aside>


          
    <section>
      <img src={"/images/Group 979.png"} alt="group979"></img>
    </section>
        </div>
      </div>
    </main>
    )
    }
}




export default Main;