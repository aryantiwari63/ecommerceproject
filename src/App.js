import logo from './logo.svg';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './Components/Navbar';
import Productcard from './Components/Productcard';
import Homeproducts from './Components/Homeproducts';
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import Addtocard from './Components/Addtocard';
import Profile from './Components/Profile';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       
       <Route path="/" element={<Home/>}/>
       <Route path="/profile" element={<Profile/>}/>
       <Route path="/addtocard" element={<Addtocard/>}/>
       </Routes> 
   
    
    </div>
  );
}

export default App;
