import React from 'react'
import axios from 'axios';
function Productpage() {

          
   const token = localStorage.getItem('token');
  const increaseQuantity = async (productid) => {
    try {
      const productId = productid;
      console.log('Sending productId for increase:', productId);
      const response = await axios.post('http://localhost:5000/api/incquantity', { productId }, {
        headers: {
          Authorization: `${token}`
        }
      });
      
    } catch (error) {
      console.error('Error increasing quantity', error);
    }
  };

  const decreaseQuantity = async (productid) => {
    try {
      const productId = productid;
      console.log('Sending productId for decrease:', productId);
      const response = await axios.post('http://localhost:5000/api/decquantity', { productId }, {
        headers: {
          Authorization: `${token}`
        }
      });
    
     
    } catch (error) {
      console.error('Error decreasing quantity', error);
    }
  };



  return (
    <div className="mt-32 flex gap-x-6">
    <div className="w-2/4">
      <img src="https://www.beyoung.in/api/cache/catalog/products/polo_new_update_images_10_1_2022/black_flat_knit_mens_polo_t-shirt_base_02_07_2024_700x933.jpg" className="w-full" />
    </div>
  
    <div className=" w-2/4 p-6 ">
      <p className="text-xl mb-4 text-start font-medium">PRODUCT NAME</p>
      <div className="flex items-center mb-2 gap-2">
        <b className="text-lg">$900</b>
        <s className="text-lg">$2000</s>
        <p className="text-lg">(60% off)</p>
      </div>
      <div className="mb-8 text-start">inclusive of Taxes + Free delivery</div>
  
     
      <div className="mb-6">
  <div className="flex flex-row items-center">
    <p className='font-medium'>Color: <span className='font-thin'>(Black)</span></p>
  </div>
  <div className="flex gap-2 mt-2">
    <button className="bg-black w-10 h-10 rounded-xl"></button>
    <button className="bg-blue-400 w-10 h-10 rounded-xl"></button>
    <button className="bg-green-400 w-10 h-10 rounded-xl"></button>
  </div>
</div>
<div className="mb-6">
  <div className="flex flex-row items-center">
    <p className='font-medium'>Size: <span className='font-thin'>(L)</span></p>
    </div>
    <div className="flex gap-2 mt-2">
      <button className="px-4 py-2 border border-black rounded-md hover:bg-gray-600 hover:text-yellow-500">S</button>
      <button className="px-4 py-2 border border-black rounded-md hover:bg-gray-600 hover:text-yellow-500">M</button>
      <button className="px-4 py-2 border border-black rounded-md hover:bg-gray-600 hover:text-yellow-500">L</button>
      <button className="px-4 py-2 border border-black rounded-md hover:bg-gray-600 hover:text-yellow-500">XL</button>
      <button className="px-4 py-2 border border-black rounded-md hover:bg-gray-600 hover:text-yellow-500">XXL</button>
    </div>
</div>

<div className="mb-10">
  <div className="flex flex-row items-center">
    <p className='font-medium'>Qty:</p>
    </div>
    <div className="flex items-center gap-2 mt-2">
      <button className="px-4 py-2 border border-black rounded-md text-2xl" onClick={decreaseQuantity}>-</button>
      <p className='px-4 py-2 border border-black rounded-md text-2xl '>1</p>
      <button className="px-4 py-2 border border-black rounded-md text-2xl" onClick={increaseQuantity}>+</button>
    </div>
  
</div>

  
      <button className="px-4 py-2 bg-yellow-500 text-white w-40 h-10 rounded-2xl">Buy Now</button>

      <div className='mt-10 bg-[rgb(255,255,255)] p-4 rounded-2xl shadow-xl'>
        <div className='flex justify-between mb-6'><div>Specification</div><div className='text-2xl'>+</div></div>
        <div className='flex justify-between mb-6'><div>Description</div><div className='text-2xl'>+</div></div>
        <div className='flex justify-between mb-6'><div>Return & Refund Policy</div><div className='text-2xl'>+</div></div>
        <div className='flex justify-between'><div>Marketed By</div><div className='text-2xl'>+</div></div>
      </div>
    </div>
  </div>
  

  )
}

export default Productpage;