// import logo from './logo.svg';
// import './App.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import Navbar from './Components/Navbar';
// import { useState } from 'react';
// import Homeproducts from './Components/Homeproducts';
// import Home from './Components/Home'

// import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';

// import Profile from './Pages/Profile';

// import CategoryPage from './Pages/Category';
// import Addcardmenu from './Components/Addcardmenu';

// import Loginpage from './Pages/Loginpage';
// import Signuppage from './Pages/Signuppage';
// import Passwordchange from './Pages/Passwordchange';
// import Resetpassword from './Pages/Resetpassword';
// import Productpage from './Pages/Productpage';
// import Cardproducts from './Pages/Cardproducts';

// function App() {
         
//              const[ProfileData, setProfileData] = useState("");
//              const isAuthenticated = !!localStorage.getItem('token');
           
//   return (
//     <div className="App">
//       {/* <div>
//      <Navbar/>
     
//   </div> */}
//   {isAuthenticated && <Navbar />}
 
//      <Routes>
//         {!isAuthenticated ? (
//           <>
//             <Route path="/login" element={<Loginpage />} />
//             <Route path="/signup" element={<Signuppage />} />
//             <Route path="/" element={<Navigate to="/login" />} />
//           </>
//         ) : (
//           <>
//             <Route path="/home" element={<Home />} />
//             <Route path="/profile" element={<Profile ProfileData={ProfileData} setProfileData={setProfileData} />} />
//             <Route path="/mobileandtablets" element={<CategoryPage category="mobiles & tablets" />} />
//             <Route path="/tvs" element={<CategoryPage category="tvs" />} />
//             <Route path="/fashion" element={<CategoryPage category="fashion" />} />
//             <Route path="/beauty" element={<CategoryPage category="beauty" />} />
//             <Route path="/furniture" element={<CategoryPage category="furniture" />} />
//             <Route path="/grocery" element={<CategoryPage category="grocery" />} />
//             <Route path="/HomeKitchen" element={<CategoryPage category="home & kitchen" />} />
//             <Route path="/passwordchange" element={<Passwordchange />} />
//             <Route path="/reset-password/:token" element={<Resetpassword />} />
//             <Route path="/productpage/:id" element={<Productpage />} />
//             <Route path="/cardlist" element={<Cardproducts />} />
//             <Route path="*" element={<Navigate to="/" />} />
//           </>
//         )}
//       </Routes>
//     </div>
//   );
// }

// export default App;





// import './App.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import Navbar from './Components/Navbar';
// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// import Home from './Components/Home';
// import Profile from './Pages/Profile';
// import CategoryPage from './Pages/Category';
// import Loginpage from './Pages/Loginpage';
// import Signuppage from './Pages/Signuppage';
// import Passwordchange from './Pages/Passwordchange';
// import Resetpassword from './Pages/Resetpassword';
// import Productpage from './Pages/Productpage';
// import Cardproducts from './Pages/Cardproducts';
// import Orderlist from './Pages/Orderlist';
// import Wishlist from './Pages/Wishlist';
// import Returnpage from './Pages/Returnpage';
// import Editprofile from './Pages/Editprofile';
// import Faqpage from './Pages/Faqpage';
// import TermConditionpage from './Pages/TermConditionpage';
// import Shippingpage from './Pages/Shippingpage';
// import Privacypolicy from './Pages/Privacypolicy';
// import PrivateRoute from './Components/PrivateRoute';
// import Fp from "./Pages/Fp";
// import Dp from "./Pages/Dp";

// function App() {

//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
       

//            <Route path="/login" element={<Loginpage />} />
//           <Route path="/signup" element={<Signuppage />} />
//           <Route path="/" element={<PrivateRoute element={<Home />} />} />
//           <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
//           <Route path="/mobileandtablets" element={<PrivateRoute element={<CategoryPage category="mobiles & tablets" />} />} />
//           <Route path="/tvs" element={<PrivateRoute element={<CategoryPage category="tvs" />} />} />
//           <Route path="/fashion" element={<PrivateRoute element={<CategoryPage category="fashion" />} />} />
//           <Route path="/beauty" element={<PrivateRoute element={<CategoryPage category="beauty" />} />} />
//           <Route path="/furniture" element={<PrivateRoute element={<CategoryPage category="furniture" />} />} />
//           <Route path="/grocery" element={<PrivateRoute element={<CategoryPage category="grocery" />} />} />
//           <Route path="/HomeKitchen" element={<PrivateRoute element={<CategoryPage category="home & kitchen" />} />} />
//           <Route path="/passwordchange" element={<PrivateRoute element={<Passwordchange />} />} />
//           <Route path="/reset-password/:token" element={<Resetpassword />} />
//           <Route path="/productpage/:id" element={<PrivateRoute element={<Productpage />} />} />
//           <Route path="/cardlist" element={<PrivateRoute element={<Cardproducts />} />} />
//           <Route path="/orderlist" element={<PrivateRoute element={<Orderlist />} />} />
//           <Route path="/wishlist" element={<PrivateRoute element={<Wishlist />} />} />
//           <Route path="/return&refund" element={<PrivateRoute element={<Returnpage />} />} />
//           <Route path="/faq" element={<PrivateRoute element={<Faqpage />} />} />
//           <Route path="/editprofile" element={<PrivateRoute element={<Editprofile />} />} />
//           <Route path="/termcondition" element={<PrivateRoute element={<TermConditionpage />} />} />
//           <Route path="/shipping" element={<PrivateRoute element={<Shippingpage />} />} />
//           <Route path="/privacypolicy" element={<PrivateRoute element={<Privacypolicy />} />} />
//           <Route path="*" element={<Navigate to="/" />} />
//           <Route path="fp" element={<Fp/>}/>
//           <Route path="dp" element={<Dp/>}/>
//              {/* <Route path="*" element={<Navigate to="/login" />} />
       
//             <Route path="/" element={<Home />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/mobileandtablets" element={<CategoryPage category="mobiles & tablets" />} />
//             <Route path="/tvs" element={<CategoryPage category="tvs" />} />
//             <Route path="/fashion" element={<CategoryPage category="fashion" />} />
//             <Route path="/beauty" element={<CategoryPage category="beauty" />} />
//             <Route path="/furniture" element={<CategoryPage category="furniture" />} />
//             <Route path="/grocery" element={<CategoryPage category="grocery" />} />
//             <Route path="/HomeKitchen" element={<CategoryPage category="home & kitchen" />} />
//             <Route path="/passwordchange" element={<Passwordchange />} />
//             <Route path="/reset-password/:token" element={<Resetpassword />} />
//             <Route path="/productpage/:id" element={<Productpage />} />
//             <Route path="/cardlist" element={<Cardproducts />} />
//             <Route path="*" element={<Navigate to="/home" />} />
//             <Route path="/orderlist" element={<Orderlist/>} />
//             <Route path="/wishlist" element={<Wishlist/>} />  
//             <Route path="/return&refund" element={<Returnpage/>} /> 
//             <Route path="/faq" element={<Faqpage/>} /> 
//             <Route path="/editprofile" element={<Editprofile/>} /> 
//             <Route path="/termcondition" element={<TermConditionpage/>}/>
//             <Route path="/shipping" element={<Shippingpage/>}/>
//             <Route path="/privacypolicy" element={<Privacypolicy/>}/> */}
//       </Routes>
//     </div>
//   );
// }

// export default App;


import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Profile from './Pages/Profile';
import CategoryPage from './Pages/Category';
import Loginpage from './Pages/Loginpage';
import Signuppage from './Pages/Signuppage';
import Passwordchange from './Pages/Passwordchange';
import Resetpassword from './Pages/Resetpassword';
import Productpage from './Pages/Productpage';
import Cardproducts from './Pages/Cardproducts';
import Orderlist from './Pages/Orderlist';
import Wishlist from './Pages/Wishlist';
import Returnpage from './Pages/Returnpage';
import Editprofile from './Pages/Editprofile';
import Faqpage from './Pages/Faqpage';
import TermConditionpage from './Pages/TermConditionpage';
import Shippingpage from './Pages/Shippingpage';
import Privacypolicy from './Pages/Privacypolicy';
import PrivateRoute from './Components/PrivateRoute';
import Fp from "./Pages/Fp";
import Dp from "./Pages/Dp";
import Navitem from './Pages/Navitem';
import Navnew from './Components/Navnew';
import Paymentpage from './Pages/Paymentpage';
import Cardpaymethod from './Pages/cardpaymethod';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        <Route path="/mobileandtablets" element={<PrivateRoute element={<CategoryPage category="mobiles & tablets" />} />} />
        <Route path="/tvs" element={<PrivateRoute element={<CategoryPage category="tvs" />} />} />
        <Route path="/fashion" element={<PrivateRoute element={<CategoryPage category="fashion" />} />} />
        <Route path="/beauty" element={<PrivateRoute element={<CategoryPage category="beauty" />} />} />
        <Route path="/furniture" element={<PrivateRoute element={<CategoryPage category="furniture" />} />} />
        <Route path="/grocery" element={<PrivateRoute element={<CategoryPage category="grocery" />} />} />
        <Route path="/HomeKitchen" element={<PrivateRoute element={<CategoryPage category="home & kitchen" />} />} />
        <Route path="/passwordchange" element={<PrivateRoute element={<Passwordchange />} />} />
        <Route path="/reset-password/:token" element={<Resetpassword />} />
        <Route path="/productpage/:id" element={<PrivateRoute element={<Productpage />} />} />
        <Route path="/cardlist" element={<PrivateRoute element={<Cardproducts />} />} />
        <Route path="/orderlist" element={<PrivateRoute element={<Orderlist />} />} />
        <Route path="/wishlist" element={<PrivateRoute element={<Wishlist />} />} />
        <Route path="/return&refund" element={<PrivateRoute element={<Returnpage />} />} />
        <Route path="/faq" element={<PrivateRoute element={<Faqpage />} />} />
        <Route path="/editprofile" element={<PrivateRoute element={<Editprofile />} />} />
        <Route path="/termcondition" element={<PrivateRoute element={<TermConditionpage />} />} />
        <Route path="/shipping" element={<PrivateRoute element={<Shippingpage />} />} />
        <Route path="/privacypolicy" element={<PrivateRoute element={<Privacypolicy />} />} />
        <Route path="fp" element={<Fp />} />
        <Route path="dp" element={<Dp />} />
        <Route path="/navitems" element={<Navitem />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* <Route path="/navnew" element={ <Navnew/>} /> */}
        <Route path="/paymentpage" element={<Paymentpage/>} />
        <Route path="/cartpaymethod" element={<Cardpaymethod/>} />
      </Routes>
    </div>
  );
}

export default App;
