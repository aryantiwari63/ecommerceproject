import React from 'react'
import Homeproducts from './Homeproducts';
import BanerSlider from './BanerSlider';
import rakhi from '../images/bhaislider1.gif';
import combo from '../images/combo-section-desktop.jpg'
import Footer from './Footer';
import Discountzone from '../Pages/Discountzone';
function Home() {
  return (
    <div className='mt-32 w-full'>
       <Homeproducts/>
        <BanerSlider/>
        <div className='mt-10 w-full'>
          <img src={rakhi}/>
        </div>
        
        <div className='mt-4 w-full'>
        <img src={combo} />
        </div>
        <Footer/>
        
    </div>
  )
}

export default Home