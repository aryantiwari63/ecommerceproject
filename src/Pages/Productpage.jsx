// import React,{useState,useEffect} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { updateQuantity } from '../Redux/Slices/cartSlice'; // Ensure you are importing the correct action
// import axios from 'axios';

// function Productpage() {
//   const dispatch = useDispatch();
  
//   const { id: productId } = useParams();
//   const cartItems = useSelector(state => state.cart.items);
//   const [productpagequantity, setProductpageQuantity] = useState(1);
  
   
//   useEffect(() => {
//     const fetchCartData = async () => {
   
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:5000/api/usercart', {
//           headers: { 'Authorization': `${token}` }
//         });
        
//         const cart = response.data;
//         const productInCart = cart.items.find(item => item.productId === productId);
//         console.log("productInCart :",productInCart);
//         if (productInCart) {
//           setProductpageQuantity(productInCart.quantity);
//         }
//       } catch (error) {
//         console.error('Error fetching cart data:', error);
//       }
//     };

//     fetchCartData();
//   }, [productId]);

 
//   const increaseQuantity = (productId) => {
//     dispatch(updateQuantity({ productId, quantity: productpagequantity + 1 }));
//   };

//   const decreaseQuantity = (productId) => {
//     if (productpagequantity > 0) {
//       dispatch(updateQuantity({ productId, quantity: productpagequantity - 1 }));
//     }
//   };
   
//   return (
//     <div className="mt-32 flex flex-col md:flex-row gap-x-6">
//       <div className="w-full md:w-2/4">
//         <img src="https://www.beyoung.in/api/cache/catalog/products/polo_new_update_images_10_1_2022/black_flat_knit_mens_polo_t-shirt_base_02_07_2024_700x933.jpg" className="h-1/2 w-full" />
//       </div>
//       <div className="w-full md:w-2/4 p-6">
//         <p className="text-xl mb-4 text-start font-medium">PRODUCT NAME</p>
//         <div className="flex items-center mb-2 gap-2">
//           <b className="text-lg">$900</b>
//           <s className="text-lg">$2000</s>
//           <p className="text-lg">(60% off)</p>
//         </div>
//         <div className="mb-8 text-start">inclusive of Taxes + Free delivery</div>
//         <div className="mb-6">
//           <div className="flex flex-row items-center">
//             <p className='font-medium'>Color: <span className='font-thin'>(Black)</span></p>
//           </div>
//           <div className="flex gap-2 mt-2">
//             <button className="bg-black w-10 h-10 rounded-xl"></button>
//             <button className="bg-blue-400 w-10 h-10 rounded-xl"></button>
//             <button className="bg-green-400 w-10 h-10 rounded-xl"></button>
//           </div>
//         </div>
//         <div className="mb-6">
//           <div className="flex flex-row items-center">
//             <p className='font-medium'>Size: <span className='font-thin'>(L)</span></p>
//           </div>
//           <div className="flex gap-2 mt-2">
//             <button className="px-4 py-2 border border-black rounded-md hover:bg-gray-600 hover:text-yellow-500">S</button>
//             <button className="px-4 py-2 border border-black rounded-md hover:bg-gray-600 hover:text-yellow-500">M</button>
//             <button className="px-4 py-2 border border-black rounded-md hover:bg-gray-600 hover:text-yellow-500">L</button>
//             <button className="px-4 py-2 border border-black rounded-md hover:bg-gray-600 hover:text-yellow-500">XL</button>
//             <button className="px-4 py-2 border border-black rounded-md hover:bg-gray-600 hover:text-yellow-500">XXL</button>
//           </div>
//         </div>
//         <div className="mb-10">
//           <div className="flex flex-row items-center">
//             <p className='font-medium'>Qty:</p>
//           </div>
//           <div className="flex items-center gap-2 mt-2">
//             <button className="px-4 py-2 border border-black rounded-md text-2xl" onClick={() => decreaseQuantity(productId)}>-</button>
//             <p className='px-4 py-2 border border-black rounded-md text-2xl'>{productpagequantity}</p>
//             <button className="px-4 py-2 border border-black rounded-md text-2xl" onClick={() => increaseQuantity(productId)}>+</button>
//           </div>
//         </div>
//         <button className="px-4 py-2 bg-yellow-500 text-white w-40 h-10 rounded-2xl">Buy Now</button>
//         <div className='mt-10 bg-[rgb(255,255,255)] p-4 rounded-2xl shadow-xl'>
//           <div className='flex justify-between mb-6'><div>Specification</div><div className='text-2xl'>+</div></div>
//           <div className='flex justify-between mb-6'><div>Description</div><div className='text-2xl'>+</div></div>
//           <div className='flex justify-between mb-6'><div>Return & Refund Policy</div><div className='text-2xl'>+</div></div>
//           <div className='flex justify-between'><div>Marketed By</div><div className='text-2xl'>+</div></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Productpage;
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateQuantity } from '../Redux/Slices/cartSlice'; // Ensure you are importing the correct action
import axios from 'axios';

function Productpage() {
  const dispatch = useDispatch();
  const { id: productId } = useParams();
  const cartItems = useSelector(state => state.cart.items);
  const [productpageQuantity, setProductpageQuantity] = useState(1);
  const [localQuantity, setLocalQuantity] = useState(1); // Local state for quantity
  const [Productdetail,setProductdetail] = useState("");

  useEffect(() => {

    const prouctdetails = async(req,res) =>{
      const token = localStorage.getItem('token');
   
    const response = await axios.get(`http://localhost:5000/api/productdetail/${productId}`, {
      headers: { 'Authorization': `${token}` }
    });
    setProductdetail(response.data);
    console.log(Productdetail);
     } 

    const fetchCartData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/usercart', {
          headers: { 'Authorization': `${token}` }
        });
    
        const cart = response.data;
        const productInCart = cart.items.find(item => item.productId.toString() === productId);
        if (productInCart) {
          setProductpageQuantity(productInCart.quantity);
          setLocalQuantity(productInCart.quantity); // Initialize local quantity
        }
      } catch (error) {
        console.error('Error fetching cart data:', error);
      }
    };

    fetchCartData();
    prouctdetails();
  }, [productId]);

  
  const updateCart = async (quantity) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/updateCartQuantity', 
        { productId, quantity },
        { headers: { 'Authorization': `${token}` } }
      );
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const increaseQuantity = () => {
    const newQuantity = productpageQuantity + 1;
    setProductpageQuantity(newQuantity);
    setLocalQuantity(newQuantity);
    dispatch(updateQuantity({ productId, quantity: newQuantity }));
    updateCart(newQuantity);
  };

  const decreaseQuantity = () => {
    if (productpageQuantity > 1) {
      const newQuantity = productpageQuantity - 1;
      setProductpageQuantity(newQuantity);
      setLocalQuantity(newQuantity);
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
      updateCart(newQuantity);
    }
  };

 

  return (
    <div className="mt-32 flex flex-col md:flex-row gap-x-6">
      <div className="w-full md:w-2/4">
        <img src="https://www.beyoung.in/api/cache/catalog/products/polo_new_update_images_10_1_2022/black_flat_knit_mens_polo_t-shirt_base_02_07_2024_700x933.jpg" className="h-1/2 w-full" />
      </div>
      <div className="w-full md:w-2/4 p-6">
        <p className="text-xl mb-4 text-start font-medium"> {Productdetail.name}</p>
        <div className="flex items-center mb-2 gap-2">
          <b className="text-lg">${Productdetail.price}</b>
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
            <p className='px-4 py-2 border border-black rounded-md text-2xl'>{productpageQuantity}</p>
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
  );
}

export default Productpage;
