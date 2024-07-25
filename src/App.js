import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import Homeproducts from './Components/Homeproducts';
import Home from './Components/Home'

import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';

import Profile from './Pages/Profile';

import CategoryPage from './Pages/Category';
import Addcardmenu from './Components/Addcardmenu';
import Loginpage from './Pages/Loginpage';
import Signuppage from './Pages/Signuppage';
import Passwordchange from './Pages/Passwordchange';
import Resetpassword from './Pages/Resetpassword';
function App() {

  return (
    <div className="App">
     <Navbar/>
  

     <Routes>
       
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Loginpage/>}/>
       <Route path="/signup" element={<Signuppage/>}/>
       <Route path="/profile" element={<Profile/>}/>
       <Route path="/mobileandtablets" element={<CategoryPage category="mobiles & tablets"/>}/>
       <Route path="/tvs" element={<CategoryPage category="tvs"/>}/>
       <Route path="/fashion" element={<CategoryPage category="fashion"/>}/>
       <Route path="/beauty" element={<CategoryPage category="beauty"/>}/>
       <Route path="/furniture" element={<CategoryPage category="furniture"/>}/>
       <Route path="/grocery" element={<CategoryPage category="grocery"/>}/>
       <Route path="/HomeKitchen" element={<CategoryPage category="home & kitchen"/>}/>
      <Route path="/passwordchange" element={<Passwordchange/>}/>
      <Route path="/reset-password/:token" element={<Resetpassword/>}/>
       </Routes> 
   
    
    </div>
  );
}

export default App;
