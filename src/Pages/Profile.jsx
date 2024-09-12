
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import User from '../images/user.jpg';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

function Profile() {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState("");
  const profileUrl = useSelector((state) => state.profile.profileUrl);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const fetchProfileData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }

      const response = await axios.get('http://localhost:5000/api/profiledata', {
        headers: {
          'Authorization': `${token}`,
        },
      });

      setIsLoggedIn(true);
      setProfileData(response.data);
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post('http://localhost:5000/api/logout', {}, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      localStorage.removeItem('token');
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className='mt-32 lg:mx-60'>
    <div className='relative flex justify-between border-b-2 pb-4 '>
      <div className='ml-4'>
        {profileData ? (
          
          <p className='text-4xl text-left font-bold'>Hey,{profileData.name}</p>
        ) : (
          <>
            <p className='text-4xl text-left font-bold'>Hey,</p>
            <p className='text-4xl text-left font-bold'>there!</p>
          </>
        )}
      </div>
      <div className='flex'>
      <div className=' rounded-full p-2'>
        <img src={profileUrl || User} className='rounded-full w-24 h-24' alt='Profile' />
      </div>
      <div className='mt-[90px]'>
              <FontAwesomeIcon icon={faEdit} onClick={() => navigate('/editprofile')}/>
              </div>
      </div>
      {!profileData ? (
        <span className='absolute -bottom-[10px] left-0 bg-white px-2 text-md text-red-400'>
         <a href="/login"> Login Now &gt;</a>
        </span>
      ):(
        <span className='absolute -bottom-[10px] left-0 bg-white px-2 text-md text-red-400'>
         <button onClick={handleLogout}> Logout &gt;</button>
        </span>
      )
      }
    </div>
    <div className='py-10 flex flex-col gap-5 md:gap-20'>
      <p className='text-left mx-2 text-sm'>ORDERS AND WISHLIST</p>
      <div className='mx-2 pb-4 flex justify-between border-b-2'>
        <p className='font-medium' ><a href='/orderlist'>Orders</a></p>
        <FontAwesomeIcon icon={faClipboardList} className='float-end text-2xl text-black' />
      </div>
      <div className='mx-2 pb-4 flex justify-between border-b-2'>
        <p className='font-medium' ><a href='/wishlist'>Wishlist</a></p>
        <FontAwesomeIcon icon={faHeart} className='float-end text-2xl text-black' />
      </div>
    </div>
    <div>
      <p className='text-left mx-2 text-sm'>SUPPORT</p>
      <div className='mx-2 pb-4 flex justify-between border-b-2'>
        <p className='font-medium'><a href="/faq">Help Center</a></p>
        <FontAwesomeIcon icon={faCircleQuestion} className='float-end text-2xl text-black' />
      </div>
    </div>

    <div className='mt-10 text-left text-[14px] shadow-2xl font-medium mx-2'>
        <p className='mb-2'>FAQs</p>
        <p className='mb-2'>ABOUT US</p>
        <p className='mb-2'>TERMS OF USE</p>
        <p>PRIVACY POLICY</p>
    </div>
  </div>
   
  );
}

export default Profile;
