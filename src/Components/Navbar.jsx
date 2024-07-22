import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Navbar.css';
import borosil from "../images/borosil_blue_new.png";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
     <nav className='flex '>
        <div className='leftnav  '>
             <img src={borosil}/>
        </div>
        <div className='rightnav  '>
            
         <Link to="/"><FontAwesomeIcon  className='ficon' icon={faHome}/></Link>
         <Link to="/profile">  <FontAwesomeIcon className='ficon' icon={faUser}/></Link>
         <Link to="/addtocard"> <FontAwesomeIcon className='ficon' icon={faShoppingCart}/></Link>
           
        </div>
     </nav>
    </div>
  )
}

export default Navbar