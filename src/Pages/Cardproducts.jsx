// import React, { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateQuantity, removeFromCart, setCartItems } from '../Redux/Slices/cartSlice';

// function Cardproducts() {
//   const cartItems = useSelector(state => state.cart.items);
//   const dispatch = useDispatch();
//   const [productpagequantity, setProductpageQuantity] = useState(1);

//   const updateCartQuantity = async (productId, quantity) => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.post('http://localhost:5000/api/updateCartQuantity', {
//         productId,
//         quantity
//       }, {
//         headers: { 'Authorization': `${token}` }
//       });

//       if (response.data.success) {
//         console.log('Quantity updated in the database');
//       } else {
//         console.error('Failed to update quantity in the database');
//       }
//     } catch (error) {
//       console.error('Error updating quantity:', error);
//     }
//   };

//   const increaseQuantity = async (productId) => {
//     const newQuantity = productpagequantity + 1;
//     dispatch(updateQuantity({ productId, quantity: newQuantity }));
//     await updateCartQuantity(productId, newQuantity);
//   };

//   const decreaseQuantity = async (productId) => {
//     if (productpagequantity > 0) {
//       const newQuantity = productpagequantity - 1;
//       dispatch(updateQuantity({ productId, quantity: newQuantity }));
//       await updateCartQuantity(productId, newQuantity);
//     }
//   };

//   const deleteCartProduct = (productId) => {
//     dispatch(removeFromCart({ productId }));
//   };

//   const fetchCart = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.get('http://localhost:5000/api/usercart', {
//         headers: {
//           'Authorization': `${token}`
//         }
//       });
//       dispatch(setCartItems(response.data.items));
//     } catch (error) {
//       console.error('Error fetching cart:', error);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   return (
//     <div className='mt-32'>
//       {cartItems.length > 0 ? (
//         cartItems.map(item => (
//           <div key={item.productId} className='mt-10 bg-[rgb(255,255,255)] p-4 rounded-2xl shadow-xl'>
//             <div className='flex justify-between mb-6'>
//               <div>
//                 <img src={item.imageUrl} alt={item.name} />
//               </div>
//               <div>{item.price}</div>
//               <div className="flex items-center gap-2">
//                 <button className="px-2 py-1 border border-black rounded-md" onClick={() => decreaseQuantity(item.productId)}>-</button>
//                 <p className='px-2 py-1 border border-black rounded-md'>{item.quantity}</p>
//                 <button className="px-2 py-1 border border-black rounded-md" onClick={() => increaseQuantity(item.productId)}>+</button>
//               </div>
//               <div>{item.quantity * item.price}</div>
//             </div>
//             <div className='flex justify-end gap-4 text-red-500'>
//               <span><FontAwesomeIcon icon={faTrash} onClick={() => deleteCartProduct(item.productId)} /></span>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>Your cart is empty</p>
//       )}
//     </div>
//   );
// }

// export default Cardproducts;
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeFromCart, setCartItems } from '../Redux/Slices/cartSlice';

function Cardproducts() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const updateCartQuantity = async (productId, quantity) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:5000/api/updateCartQuantity', {
        productId,
        quantity
      }, {
        headers: { 'Authorization': `${token}` }
      });

      if (response.data.success) {
        console.log('Quantity updated in the database');
      } else {
        console.error('Failed to update quantity in the database');
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  const increaseQuantity = async (productId) => {
    const item = cartItems.find(item => item.productId === productId);
    if (item) {
      const newQuantity = item.quantity + 1;
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
      await updateCartQuantity(productId, newQuantity);
    }
  };

  const decreaseQuantity = async (productId) => {
    const item = cartItems.find(item => item.productId === productId);
    if (item && item.quantity > 0) {
      const newQuantity = item.quantity - 1;
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
      await updateCartQuantity(productId, newQuantity);
    }
  };

  const deleteCartProduct = (productId) => {
    dispatch(removeFromCart({ productId }));
  };

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/usercart', {
        headers: {
          'Authorization': `${token}`
        }
      });
      dispatch(setCartItems(response.data.items));
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [dispatch]);

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
              <span><FontAwesomeIcon icon={faTrash} onClick={() => deleteCartProduct(item.productId)} /></span>
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
