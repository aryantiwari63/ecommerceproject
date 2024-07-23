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

function App() {

  return (
    <div className="App">
     <Navbar/>
  

     <Routes>
       
       <Route path="/" element={<Home/>}/>
       <Route path="/profile" element={<Profile/>}/>
       <Route path="/mobileandtablets" element={<CategoryPage category="tvs"/>}/>
       <Route path="/tvs" element={<CategoryPage category="tvs"/>}/>
       </Routes> 
   
    
    </div>
  );
}

export default App;
