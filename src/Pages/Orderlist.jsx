import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



function Orderlist() {

    const [userorder, setuserorder] = useState([]);
    const navigate= useNavigate();
    
    const userOrder = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get('http://localhost:5000/api/userorder', {
           
            headers: {
              'Authorization': `${token}`
            }
          });
          setuserorder(response.data.orders);
          console.log("user orders are", userorder);
        } catch (error) {
          console.error('Error fetching cart:', error);
        }
      };
   
       const deleteorder = async(productId) =>{
        try {
            const token = localStorage.getItem('token');
            const response = await axios.delete('http://localhost:5000/api/deleteorder',{
              data: { productId } , 
              headers: {
                'Authorization': `${token}`
              }
        });
        console.log(response.data.orders);
            setuserorder(response.data.orders);
          } catch (error) {
            console.error('Error fetching cart:', error);
          }
       }

      useEffect(()=>{
          
        userOrder();
      },[])

    
  const productpageopen =(productId)=>{
    navigate(`/productpage/${productId}`);
}


  return (
    <div className='mt-32'>
    {userorder.length > 0 ? (
      userorder.map(order => (
        <div  className='flex justify-between mb-6 mt-10 bg-[rgb(255,255,255)] p-4 rounded-2xl shadow-xl' onClick={()=>{productpageopen(order.productId)}}>
          <div className='flex  gap-60'>
            <div className='h-[100px]'>
              <img src={order.imageUrl} alt={order.name} className='h-full'/>
            </div>
            <div>{order.totalprice}</div>
             
          </div>
          <div className='flex justify-end gap-4 text-red-500'>
            <span onClick={() => deleteorder(order.productId)}>cancel order</span>
          </div>
        </div>
      ))
    ) : (
      <p>no order</p>
    )}
  </div>
  )
}

export default Orderlist