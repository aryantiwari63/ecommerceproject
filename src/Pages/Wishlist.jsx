// import React,{useEffect, useState} from 'react'
// import axios from 'axios';

// function Wishlist() {
//      const [Wishlist, setWishlist] = ([]);

//     const showWishlist = async () => {
//         try {
//           const token = localStorage.getItem('token');
         
//           const response = await axios.get('http://localhost:5000/api/getwishlist', 
         
//             { 
//               headers: {
//                 'Authorization': `${token}`,
                
//               }
//             }
            
//           );
        
//            setWishlist(response.data.wishitems);
//            console.log(Wishlist);
//           console.log(response.data.message); 
        
//         } catch (error) {
       
//           console.error('Error:', error.response ? error.response.data.message : error.message);
//         }
//       };
      
//       useEffect(()=>{
//         showWishlist();
//       },[]);
     
//   return (
//     <div className='mt-32'>
//     {Wishlist.length > 0 ? (
//       Wishlist.map(item => (
//         <div key={item.productId} className='mt-10 bg-[rgb(255,255,255)] p-4 rounded-2xl shadow-xl'>
//           <div className='flex justify-between mb-6'>
//             <div>
//               <img src={item.imageUrl} alt={item.name} />
//             </div>
//             <div>{item.price}</div>
            
//           </div>
      
//         </div>
//       ))
//     ) : (
//       <p>No any wish list</p>
//     )}
//   </div>
//   )
// }

// export default Wishlist

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function Wishlist() {
  const [Wishlist, setWishlist] = useState([]); 
  const navigate = useNavigate();
    
  const deletewishproduct = async(productId) => {
    try{
    const token = localStorage.getItem('token');
    const response = await axios.delete(`http://localhost:5000/api//deletewishlist/${productId}`,
  
      {
     headers:{ 'Authorization': `${token}` }
    })
    console.log("response is:",response);
    setWishlist(response.data.wishitems); 
    if(response.status === 200){
           console.log("product removed");
    }
    else{
      console.log("not deleted");
    }
    }
    catch(error){
          console.log(error);
    }
  }

  const showWishlist = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/getwishlist', 
        { 
          headers: {
            'Authorization': `${token}`,
          }
        }
      );
      
      setWishlist(response.data.wishitems); 
      console.log(Wishlist);
      console.log(response.data.message); 
    } catch (error) {
      console.error('Error:', error.response ? error.response.data.message : error.message);
    }
  };

  const productpageopen =(productId)=>{
          navigate(`/productpage/${productId}`);
  }

  useEffect(() => {
    showWishlist(); 
  }, []);

  return (
    <div className='mt-32'>
      {Wishlist && Wishlist.length > 0 ? ( 
        Wishlist.map(item => (
          <div key={item.productId} className='mt-10 bg-[rgb(255,255,255)] p-4 rounded-2xl shadow-xl' onClick={()=>productpageopen(item.productId)}>
            <div className='flex justify-between mb-6'>
              <div className='h-[100px]'> 
                <img src={item.imageUrl} alt={item.name} className='h-full'/>
              </div>
              <div>{item.name}</div>
              <div>{item.price}</div>
            </div>
            <div className='flex justify-end gap-4 text-red-500'>
              <span><FontAwesomeIcon icon={faTrash}  onClick={(e) => { e.stopPropagation(); deletewishproduct(item.productId); }}/></span>
            </div>
          </div>
        ))
      ) : (
        <p>No items in your wishlist</p>
      )}
    </div>
  );
}

export default Wishlist;
