import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Navbar.css';
import borosil from "../images/borosil_blue_new.png";
import {Link} from "react-router-dom";
import Addcardmenu from './Addcardmenu';

function Navbar() {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const toggleSlider = () => {
    setIsSliderOpen(!isSliderOpen);
  };

  return (
    <div className="w-full">
     <nav className='flex '>
        <div className='leftnav  '>
             <img src={borosil}/>
        </div>
        <div className='rightnav  '>
            <Link to="/login" className='py-4 font-bold'>Login</Link>
         <Link to="/"><FontAwesomeIcon  className='ficon' icon={faHome}/></Link>
         <Link to="/profile">  <FontAwesomeIcon className='ficon' icon={faUser}/></Link>
           <FontAwesomeIcon className='ficon'  onClick={toggleSlider} icon={faShoppingCart}/>
         {/* <button className='ficon' onClick={toggleSlider}><FontAwesomeIcon icon={faShoppingCart}/></button> */}
        </div>
     </nav>
     <Addcardmenu isOpen={isSliderOpen} toggleSlider={toggleSlider} />
    </div>
  )
}

export default Navbar