 import React from 'react'
 import '../Styles/Homeproducts.css'
 import p1 from "../images/p1.jpg";
 import p2 from "../images/p2.jpg";
 import p3 from "../images/p3.jpg";
 import p4 from "../images/p4.jpg";
 import p5 from "../images/p5.jpg";
 import p6 from "../images/p6.jpg";
 import p7 from "../images/p7.jpg";
 import { useNavigate } from 'react-router-dom';
 function Homeproducts() {
          const navigate = useNavigate();
         const  allproductcat = () =>{
                        navigate("/mobileandtablets");
          }
                    
   return (
     <div class="homepageproducts">
          
         <div class="homepageproduct" onClick={allproductcat}>
             <div class="divimg"><img src={p1} class="homepageproductimg" /></div>
             <div class="divp">
                 <p>Mobiles & Tablets</p>
             </div>
         </div>
         <div class="homepageproduct"  onClick={() =>{
                        navigate("/tvs"); }}>
             <div class="divimg"><img src={p2} class="homepageproductimg" /></div>
             <div class="divp">
                 <p>TVs & Appliances</p>
             </div>
         </div>
         <div class="homepageproduct"  onClick={() =>{
                        navigate("/fashion"); }}>
             <div class="divimg"><img src={p3} class="homepageproductimg" /></div>
            <div class="divp">
                 <p>Fashion</p>
             </div>
        </div>
         <div class="homepageproduct"  onClick={() =>{
                        navigate("/beauty"); }}>
             <div class="divimg"><img src={p4} class="homepageproductimg" /></div>
            <div class="divp">
                 <p>Beauty</p>
            </div>
         </div>
         <div class="homepageproduct"  onClick={() =>{
                        navigate("/furniture");  }}>
            <div class="divimg"><img src={p5} class="homepageproductimg" /></div>
             <div class="divp">
               <p>Furniture</p>
             </div>
         </div>
         <div class="homepageproduct"  onClick={() =>{
                        navigate("/grocery"); }}>
             <div class="divimg"><img src={p6} class="homepageproductimg" /></div>
             <div class="divp">
                 <p>Grocery</p>
             </div>
         </div>
         <div class="homepageproduct"  onClick={() =>{
                        navigate("/HomeKitchen"); }}>
             <div class="divimg"><img src={p7} class="homepageproductimg" /></div>
             <div class="divp">
              <p>Home & Kitchen</p>
             </div>
         </div>
        
     </div>
     
   )
 }

 export default Homeproducts


