 import React from 'react'
 import '../Styles/Homeproducts.css'
 import p1 from "../images/p1.jpg";
 import p2 from "../images/p2.jpg";
 import p3 from "../images/p3.jpg";
 import p4 from "../images/p4.jpg";
 import p5 from "../images/p5.jpg";
 import p6 from "../images/p6.jpg";
 import p7 from "../images/p7.jpg";
 function Homeproducts() {
   return (
     <div>
          <div class="homepage-products">
         <div class="homepageproduct">
             <div class="divimg"><img src={p1} class="homepageproductimg" /></div>
             <div class="divp">
                 <p><a href="/mobileandtablets">Mobiles & Tablets</a></p>
             </div>
         </div>
         <div class="homepageproduct">
             <div class="divimg"><img src={p2} class="homepageproductimg" /></div>
             <div class="divp">
                 <p><a href="/tvs">TVs & Appliances</a></p>
             </div>
         </div>
         <div class="homepageproduct">
             <div class="divimg"><img src={p3} class="homepageproductimg" /></div>
            <div class="divp">
                 <p><a href="/fashion">Fashion</a></p>
             </div>
        </div>
         <div class="homepageproduct">
             <div class="divimg"><img src={p4} class="homepageproductimg" /></div>
            <div class="divp">
                 <p><a href='/beauty'>Beauty</a></p>
            </div>
         </div>
         <div class="homepageproduct">
            <div class="divimg"><img src={p5} class="homepageproductimg" /></div>
             <div class="divp">
                 <p>Furniture</p>
             </div>
         </div>
         <div class="homepageproduct">
             <div class="divimg"><img src={p6} class="homepageproductimg" /></div>
             <div class="divp">
                 <p>Grocery</p>
             </div>
         </div>
         <div class="homepageproduct">
             <div class="divimg"><img src={p7} class="homepageproductimg" /></div>
             <div class="divp">
                 <p>Home & Kitchen</p>
             </div>
         </div>
        
     </div>
     </div>
   )
 }

 export default Homeproducts


