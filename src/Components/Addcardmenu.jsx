// import React from 'react';
import bagicon from '../images/bagicon.jpg';

const Addcardmenu = ({ isOpen, toggleSlider }) => {
  return (
    <div className={`fixed top-0 right-0 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out w-72 h-full bg-white shadow-lg z-50`}>
    <button 
       className="absolute top-2.5 right-2.5 bg-none text-black border-none text-4xl cursor-pointer hover:bg-white focus:outline-none" 
       onClick={toggleSlider}
      > ×</button> 
     
      <img src={bagicon} alt="Bag Icon" className="w-full"/>
      <p className="p-4">Your cart is empty.</p>
      <a href="/cardlist" className='text-green-500'>cardlist</a>
    </div>
  );
};

export default Addcardmenu;
