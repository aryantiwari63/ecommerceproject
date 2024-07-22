import React from 'react'
import finish from '../images/finishimg.jpg'
import '../Styles/Productcard.css'
function Productcard() {
  return (
    <div>
  <div className="cards">
     <div className="card">
        <img src={finish} alt="Product Image"/>
        <div className="card-content">
            <div className="card-title">Finish</div>
            <button className="card-button">Add to Cart</button>
        </div>
    </div>
    <div className="card">
        <img src={finish} alt="Product Image"/>
        <div className="card-content">
            <div className="card-title">Finish</div>
            <button className="card-button">Add to Cart</button>
        </div>
    </div>
    <div className="card">
        <img src={finish} alt="Product Image"/>
        <div className="card-content">
            <div className="card-title">Finish</div>
            <button className="card-button">Add to Cart</button>
        </div>
    </div>
    <div className="card">
        <img src={finish} alt="Product Image"/>
        <div className="card-content">
            <div className="card-title">Finish</div>
            <button className="card-button">Add to Cart</button>
        </div>
    </div>
    <div class="card">
        <img src={finish} alt="Product Image"/>
        <div className="card-content">
            <div className="card-title">Finish</div>
            <button className="card-button">Add to Cart</button>
        </div>
    </div>
    <div className="card">
        <img src={finish} alt="Product Image"/>
        <div className="card-content">
            <div className="card-title">Finish</div>
            <button className="card-button">Add to Cart</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Productcard