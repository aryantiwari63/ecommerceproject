// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios';
// function Loginpage() {

//               const navigate = useNavigate();
//            const [email, setemail] = useState('');
//            const [password, setpassword] = useState("");
//           const onsubmitfun = async(e) =>{
//             e.preventDefault();
                
//             try {
//               const response = await axios.post("http://localhost:5000/api/login", { email, password }, { headers: { 'Content-Type': 'application/json' } });
//               if (response.status === 200) {
//                 const { token } = response.data;
//                 console.log(token);
//                   alert('User login successful');
//                     localStorage.setItem('token',token);
//                     navigate("/home");
//               }
//           } catch (error) {
              
//               if (error.response) {
//                   alert(error.response.data.message || 'An error occurred');
//               } else {
                  
//                   alert('An error occurred');
//               }
//           }
//             }

       
//   return (
//     <div className="mt-32 w-3/6 mx-[25%] ">
//           <form onSubmit={onsubmitfun}>
//             <div className='flex flex-col'>
//              <label className='text-left'>Email</label>
//                <input type="text" name="email" className='border-b-2 border-black focus:outline-none' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
//                </div>
//                <div className='flex flex-col'>
//                <label className='text-left'>Password</label>
//                <input type="text" name="password" className='border-b-2 border-black focus:outline-none' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
               
//                </div>
//              <p className='text-right  text-xs py-2 text-blue-500'> <Link to="/passwordchange">forgot password</Link></p>
//                <button className='w-20 h-8 bg-sky-700 text-white  rounded-full mt-4'>Login</button>
//                <p className='text-right  text-xs py-4 text-blue-500'>Don't have an account? <Link to="/signup">signup</Link></p>

//           </form>
//     </div>
//   )
// }

// export default Loginpage
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Correct icon names

function Loginpage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const onSubmitFun = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/login", { email, password }, { headers: { 'Content-Type': 'application/json' } });
      if (response.status === 200) {
        const { token } = response.data;
        console.log(token);
        alert('User login successful');
        localStorage.setItem('token', token);
        navigate("/home");
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || 'An error occurred');
      } else {
        alert('An error occurred');
      }
    }
  }

  return (
    <div className="mt-32 w-3/6 mx-[25%]">
      <form onSubmit={onSubmitFun}>
        <div className='flex flex-col'>
          <label className='text-left'>Email</label>
          <input
            type="text"
            name="email"
            className='border-b-2 border-black focus:outline-none'
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
          />
        </div>
        <div className='flex flex-col'>
          <label className='text-left'>Password</label>
          <div className='relative'>
            <input
              type={showPassword ? "text" : "password"} // Toggle between text and password
              name="password"
              className='border-b-2 border-black focus:outline-none w-full pr-10'
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
            />
            <span
              className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} /> {/* Correct icon usage */}
            </span>
          </div>
        </div>
        <p className='text-right text-xs py-2 text-blue-500'>
          <Link to="/passwordchange">Forgot password?</Link>
        </p>
        <button className='w-20 h-8 bg-sky-700 text-white rounded-full mt-4'>Login</button>
        <p className='text-right text-xs py-4 text-blue-500'>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

export default Loginpage;
