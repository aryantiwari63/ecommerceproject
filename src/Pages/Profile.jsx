import React, { useEffect } from 'react'
import User from '../images/user.jpg'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Profile({ProfileData,setProfileData}) {
               const navigate = useNavigate();
      
          const fetchProfildata = async () => {
            try {
              const token = localStorage.getItem('token');
              if (!token) {
                throw new Error('No token found');
              }
              console.log('Token:', token);
          
              const response = await axios.get('http://localhost:5000/api/profiledata', {
                headers: {
           
                         'Authorization': `${token}` 
                }
              });
              console.log('response:', response.data);
              setProfileData(response.data);
            } catch (error) {
              console.log(error);
            }
          };
          
          
            useEffect(()=>{
          
              fetchProfildata();
            },[])


            // const handleLogout = async () => {
            //   try {
            //     const token = localStorage.getItem('token');
    
            //   const res= await axios('http://localhost:5000/api/logout', {
            //     method: 'POST',
            //     headers: {
            //       'Content-Type': 'application/json',
            //       'Authorization': `Bearer ${token}`
            //     }
            //   });
          
            
            //       console.log(res);
            //     localStorage.removeItem('token');
            //     navigate('/login'); 
            //   } catch (error) {
            //     console.error('Error logging out:', error);
            //   }
            // };

            const handlelogout = async () => {
              try {
                console.log('Logout button clicked'); // Log to ensure function is called
                const token = localStorage.getItem('token');
                console.log('Token for logout:', token);
          
                const res = await axios.post('http://localhost:5000/api/logout', {}, {
                  headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                  }
                });
          
                console.log('Logout response:', res);
                localStorage.removeItem('token');
                navigate('/login');
              } catch (error) {
                console.error('Error logging out:', error);
              }
            };



  return (
    <div className='min-h-screen flex flex-col  mt-32 '> 
                                                                       
                       
       <div className='relative flex-grow'>    
 
  {/* <div className='absolute inset-0 flex justify-center items-center'>
    <div className='bg-purple-500 text-white p-4 rounded-full shadow-lg'>
      <div className='flex justify-between'>
        <div>Order</div>
        <div>Notification</div>
      </div>
    </div>
  </div> */}


  <div className='bg-red-500 p-4 rounded-2xl text-center h-1/2'>
    <div className='flex justify-center mb-4'>
      <div className='bg-purple-500 rounded-full p-2'>
        <img src={User} className='rounded-full w-24 h-24' alt='Profile'/>
      </div>
    </div>
    <p className='text-white'>{ProfileData.name}</p>
    <p className='text-white'>{ProfileData.email}</p>
  </div>

 
  <div className='mt-10 bg-white p-4 rounded-2xl shadow-xl'>
    <div className='flex justify-between mb-6'>
      <div>Location: (value)</div>
      <div className='text-2xl'>+</div>
    </div>
    <div className='flex justify-between mb-6'>
      <div><button onClick={handlelogout} className='bg-black text-white h-8 w-24 rounded-2xl'>Logout</button></div>
     
    </div>
  </div>
</div>

    </div>
  )
}

export default Profile