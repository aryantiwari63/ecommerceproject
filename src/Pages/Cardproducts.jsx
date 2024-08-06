// import React,{useEffect,useState} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// function Cardproducts() {

//     const [cartItems, setCartItems] = useState([]);
//     const token = localStorage.getItem('token');

//     const increaseQuantity = async (productid) => {
//       try {const productId = productid;
      
//         console.log('Sending productId for increase:', productId);
//         const response = await axios.post('http://localhost:5000/api/incquantity', {productId }, {
//           headers: {
//             Authorization: `${token}`
//           }
//         });
//            setCartItems(response.data);
//            fetchCart();
//       } catch (error) {
//         console.error('Error increasing quantity', error);
//       }
//     };

//     const deletecartproduct = async(id) => {
           
//               const res = await axios.delete('http://localhost:5000/api/deletecartproduct/${id}');
//               setCartItems(prevData => prevData.filter(user=>user._id !== id));
//               console.log(cartItems);
//     } 
    
//     const decreaseQuantity = async (productid) => {
//       try {const productId = productid;
    
//         console.log('Sending productId for decrease:', productId);
//         const response = await axios.post('http://localhost:5000/api/decquantity', {productId}, {
//           headers: {
//             Authorization: `${token}`
//           }
//         });
//         setCartItems(response.data);
//          fetchCart();
//       } catch (error) {
//         console.error('Error decreasing quantity', error);
//       }
//     };
  
//     const fetchCart = async () => {
//       try {
//           const token = localStorage.getItem('token');
//         const response = await axios.get('http://localhost:5000/api/usercart', { 
//           headers: {
//             'Authorization': `${token}`
//           }
//         });
//         setCartItems(response.data.items);
//         console.log(cartItems);
//       } catch (error) {
//         console.error('Error fetching cart:', error);
//       }
//     };

//     useEffect(() => {
  
//       fetchCart();
//     }, []);

//     return (
//         <div className='mt-32'>
//       {cartItems.length > 0 ? (
//         cartItems.map(item => (
//           <div key={item.productId} className='mt-10 bg-[rgb(255,255,255)] p-4 rounded-2xl shadow-xl'>
//             <div className='flex justify-between mb-6'>
//               <div>
//                 <img src={item.imageUrl} alt={item.name} />
//               </div>
//               <div>{item.price}</div>
//               <div className="flex items-center gap-2">
//                 <button className="px-2 py-1 border border-black rounded-md "  onClick={()=>{decreaseQuantity(item.productId)}}>-</button>
//                 <p className='px-2 py-1 border border-black rounded-md'>{item.quantity}</p>
//                 <button className="px-2 py-1 border border-black rounded-md "  onClick={()=>{increaseQuantity(item.productId)}}>+</button>
//               </div>
//               <div>{item.quantity * item.price}</div> 
//             </div>
//             <div className='flex justify-end gap-4 text-red-500'>
             
//               <span><FontAwesomeIcon icon={faTrash} onClick={deletecartproduct(item.productId)} /></span>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>Your cart is empty</p>
//       )}
//     </div>
//     )
// }

// export default Cardproducts




import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Cardproducts() {
  const [cartItems, setCartItems] = useState([]);
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
      setCartItems(response.data);
      fetchCart();
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
      setCartItems(response.data);
      fetchCart();
    } catch (error) {
      console.error('Error decreasing quantity', error);
    }
  };

   
  const deletecartproduct = async (id) => {
    try {

      const response = await axios.delete(`http://localhost:5000/api/deletecartproduct/${id}`, {
        headers: {
          Authorization: `${token}`
        }
      });
      console.log(response);
      setCartItems(prevData => prevData.filter(item => item.productId !== id));
      console.log("this is cartitems",cartItems);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };


  const fetchCart = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/usercart', {
        headers: {
          'Authorization': `${token}`
        }
      });
      setCartItems(response.data.items);
      console.log(cartItems);
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className='mt-32'>
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <div key={item.productId} className='mt-10 bg-[rgb(255,255,255)] p-4 rounded-2xl shadow-xl'>
            <div className='flex justify-between mb-6'>
              <div>
                <img src={item.imageUrl} alt={item.name} />
              </div>
              <div>{item.price}</div>
              <div className="flex items-center gap-2">
                <button className="px-2 py-1 border border-black rounded-md" onClick={() => decreaseQuantity(item.productId)}>-</button>
                <p className='px-2 py-1 border border-black rounded-md'>{item.quantity}</p>
                <button className="px-2 py-1 border border-black rounded-md" onClick={() => increaseQuantity(item.productId)}>+</button>
              </div>
              <div>{item.quantity * item.price}</div>
            </div>
            <div className='flex justify-end gap-4 text-red-500'>
              <span><FontAwesomeIcon icon={faTrash} onClick={() => deletecartproduct(item.productId)} /></span>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
}

export default Cardproducts;
