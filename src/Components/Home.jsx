import React from 'react'
import Homeproducts from './Homeproducts';
import BanerSlider from './BanerSlider';
import rakhi from '../images/bhaislider1.gif';
import combo from '../images/combo-section-desktop.jpg'
function Home() {
  return (
    <div className='mt-32'>
       <Homeproducts/>
        <BanerSlider/>
        <div className='mt-10'>
          <img src={rakhi}/>
         
        </div>
        <div className='mt-4'>
        <img src={combo}/>
        </div>
        <div>
          
        </div>
    </div>
  )
}

export default Home