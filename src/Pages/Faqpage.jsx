
// import React, { useState } from 'react';
// import 'tailwindcss/tailwind.css';

// const FAQ = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const faqItems = [
//     { question: 'What is the Durex Playthings Oralicious Board Game?', answer: 'The Durex Playthings Oralicious Board Game is...' },
//     { question: 'What is the Durex Playthings Oralicious Board Game?', answer: 'The Durex Playthings Oralicious Board Game is...' },
//     { question: 'What is the Durex Playthings Oralicious Board Game?', answer: 'The Durex Playthings Oralicious Board Game is...' },
//     { question: 'What is the Durex Playthings Oralicious Board Game?', answer: 'The Durex Playthings Oralicious Board Game is...' },
//     { question: 'What is the Durex Playthings Oralicious Board Game?', answer: 'The Durex Playthings Oralicious Board Game is...' },
// ];

//   const toggleAnswer = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="mt-32 faqcontainer flex flex-col-reverse w-full bg-cover bg-center" style={{ backgroundImage: "url('images/DesktopExplorationbackground.jpg')" }}>
//       <section className="faq-section order-2">
//         <h3 className="text-black uppercase mb-5 ml-12 md:ml-10 text-lg md:text-xl">My Account & My Order</h3>
//         <h3 className="text-black uppercase mb-5 ml-12 md:ml-10 text-lg md:text-xl">Cancellation & Related Queries</h3>
//         <h3 className="text-black uppercase mb-5 ml-12 md:ml-10 text-lg md:text-xl">Payment Mode</h3>
//         <h3 className="text-black uppercase mb-5 ml-12 md:ml-10 text-lg md:text-xl">Shipping & Tracking</h3>
//         <h3 className="text-black uppercase mb-5 ml-12 md:ml-10 text-lg md:text-xl">Return Policy</h3>
//         <h3 className="text-black uppercase mb-5 ml-12 md:ml-10 text-lg md:text-xl">Wash Care instructions</h3>
//         <h3 className="text-black uppercase mb-5 ml-12 md:ml-10 text-lg md:text-xl">Legitimacy & Reliability</h3>
       
//         <div id="Myaccount" className="faq border-t border-white border-opacity-30 w-3/5 ml-20 md:w-11/12 md:ml-7">
//           {faqItems.map((item, index) => (
//             <div key={index} className="faq-item border-b border-white border-opacity-30">
//               <button
//                 className={`faq-question w-full bg-transparent border-none text-left px-4 py-3 text-base cursor-pointer relative ${activeIndex === index ? 'active' : ''}`}
//                 onClick={() => toggleAnswer(index)}
//               >
//                 Q: {item.question}
//                 <span className={`absolute right-5 w-2.5 h-2.5 border-r-2 border-b-2 border-black transform rotate-45 transition-transform ${activeIndex === index ? 'rotate-[-135deg]' : ''}`}></span>
//               </button>
//               <div
//                 className={`faq-answer overflow-hidden transition-all duration-300 ease-in-out px-4 py-2 bg-white bg-opacity-10 ${activeIndex === index ? 'max-h-[1000px] visible' : 'max-h-0 invisible'}`}
//               >
//                 <p className="text-sm">{item.answer}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//       <div className="additional-content order-1 flex justify-center mt-5">
//         {/* Additional content like images can be placed here */}
//         <img src="images/placeholder.jpg" alt="Additional Content" className="max-w-full h-auto" />
//       </div>
//     </div>
//   );
// };

// export default FAQ;

import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const FAQ = () => {
  const [activeSection, setActiveSection] = useState('Myaccount');
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = {
    Myaccount: [
      { 
        question: 'How do I place Order?',
        answer: 'Follow these steps to quickly place the order:\n\n1. At Home Page (www.beyoung.in) or Top Left corner you can explore the Categories. Select your favorite category and start adding the products in the cart with a single click.\n2. After adding products, Click on “My Cart” and proceed to Checkout.\n3. You can Checkout by Creating Account/Signin or via Guest User (Fill Correct Shipping Details for Accurate Tracking of your order).\n4. Click on “Continue to Payment”. Select your preferred Payment Gateway, Pay the Amount, and Confirm Your Order.\n5. You will receive the Confirmation Email and SMS once the order is successfully placed.'
      },
      { question: 'How will I Receive My Order?', answer: 'We will ship your order on your mentioned shipping address. Your order will be delivered at your doorstep by trusted courier services. All orders will be delivered in fully sealed packages to protect your goods and ensure that they reach you in perfect condition.' },
      { question: 'How will I get confirmation that my Order is placed successfully?', answer: 'We ll send an email and SMS with your Order ID and Order Details. Also, once the order is shipped from the warehouse you will receive the tracking details via SMS and email.' },
    ],
    Cancellation: [
        {
          question: 'Order Cancellation',
          answer: 'What is Beyoung’s Cancellation Policy?:\n\n1. You can cancel the order within 24 hours of the duration of placing the order.\n2. You just have to raise a cancellation request for your order(s) through HelpCenter.\n3. We\'ll send you a confirmation e-mail to the registered e-mail address.\n4. If the order is prepaid, the refund process will take 7-10 banking working days.\n\nPlease Note: Once the order is shipped from the warehouse, it cannot be cancelled. When the shipment is delivered and if the customer receives a faulty product, then the customer can raise a return request.'
        },
    
      ],
      
    Payment: [
      { question: 'Are there any Cash Collection Charges?', answer: 'Only for COD orders, you will be levied Cash Collection Charges of Rs.50 per product. For example, if your order includes three products, you will be levied Cash Collection Charges of Rs.150.' },
      { question: 'Is it safe to shop online if I make payment using net banking, Debit card, or Credit Card?', answer: 'We have trusted and secured payment gateways. It is completely secure to pay online via Credit Card, Debit Card and net banking transactions.Please Note: Beyoung Team does not ask for your personal information or banking details over call or email. Please do not share the details with anyone. Only follow the secured checkout process at the Website.' },
      { question: 'Why am I not getting any COD option on the payment page?', answer: 'The COD option might not be available because of the following reasons:1. Our courier partners may not support the Cash on Delivery option for your delivery address.2.The products ordered are not available for the COD option.' },
    ],
    Shipping: [
      { question: 'What is the Shipping Policy of Beyoung?', answer: 'We personally ensure that every delivery from Beyoung is processed under excellent condition and in fastest time. We take care of all parameters that ensure your delivery reaches you in a safe and sound state.' },
      { question: 'What is the delivery time period?', answer: 'The tentative delivery period is 4-5 working days. However, the actual delivery time may vary due to unexpected circumstances.' },
      { question: 'Do you apply any shipping charges?', answer: 'We provide free shipping on all orders. If you choose COD payment method, there are nominal cash collection chargers i.e. Rs. 50 for every product. For example, if your order includes three products, you will be levied a COD charge of Rs.150' },
     
    ],
    Return: [
      { question: 'What is Return Policy?', answer: 'Beyoung has 15 days Return Policy that gives you the option to return the product within 15 days from the delivery date under the circumstances mentioned below. We request you not use the product and preserve its original condition, tags, and packaging.In case the customer receives a defective/wrong product(s), the reverse pickup will be generated by us and the shipping charges will be covered by us only.Note: Due to hygiene concerns of our customers, we do not accept returns/refunds or perform an exchange for the Boxer Shorts.In case the customers pin code is non-serviceable by our courier partners, then the customer is liable to self-ship the product(s) and the shipping charges up to ₹100 are 100% refundable if the customer receives defective/wrong product(s).' },
      
    ],
    WashCare: [
      { question: 'Single Jersey Topwear (T-shirts, Vests, Tank Tops, T-Shirt Dresses)', answer: 'Do not bleach or wash with chlorine based detergent/water; use a mild detergent in moderate quantity instead Do not iron on stitches, seams, trims or embellishments as high temperatures may cause them to open Do not soak for more than 20-30 minutes; prolonged soaking may lead to colour loss, eventually weakening the fabric Do not wring Do not use hard brushes during hand wash as they may damage the prints Do not leave the iron on at one place for too long; especially at the neck rib where the elastane may break and loosen the rib Do not iron directly on prints (in case of printed products) Machine wash cold Wash/dry inside out Fabric subject to initial colour loss; hence wash separately Tumble dry low Warm iron needed. Dry promptly in shade; preferably on a flat surface as hanging may cause measurement variations' },
     
    ],
    Legitimacy: [
      { question: 'Is Beyoung a Genuine and Legit Website?', answer: 'Beyoung is a legitimate fashion e-commerce website with its headquarters in Udaipur. It is a trusted website with more than 3 million customers across tier II, III, & IV cities in India. We at Beyoung adhere to all the e-commerce protocols and policies of the Indian government. We emphasize adapting to the changing market demands and trends to fulfill all your needs and requirements. Beyoung is a safe website and highly secure platform as we use advanced encryption systems to ensure that all the transactions made by our customers are secured and protected. In the unlikely event of any dispute concerning an incorrect or damaged product, we have a dedicated customer service team that will help you through the process of return, exchange, or refund as per the Beyoung policy. We value and appreciate you for the support you have provided us all these years. We promise to provide better services every time you shop with us.' },
      { question: 'Is Beyoung Real or Fake?', answer: 'You might ask if Beyoung is real or fake. Beyoung is a legit and real brand that you can trust to offer you aspirational, affordable, and convenient fashion. We are a real brand offeringeveryday fashion clothes that follow the latest trends. Beyoung is a trusted site from where you can shop with confidence knowing that you will receive genuine and high-quality products. Our commitment to quality, style, and customer satisfaction makes us a brand that you can trust.Beyoung has gained popularity for displaying a genuine commitment to offering affordable and stylish fashion products. We advise you to use Beyoung’s official website or mobile application to buy the latest fashion to ensure the authenticity of the products and to avoid any potential counterfeit items.' },
      { question: 'Is Beyoung a Good Brand Worth Exploring?', answer: 'You might wonder how are Beyoung’s clothes. Beyoung is a good brand that has established a strong presence among Indian youngsters. Our focus on maintaining transparency and customer satisfaction has helped us earn the trust of more than 3 million happy customers. Beyoung is a trusted brand that has focused on offering high-quality and latest fashion products to its customers.Beyoung’s clothes are generally well-received by customers with positive feedback surrounding the quality, comfort, and style. Most of our customers appreciate Beyoung’s commitment to offering trendy fashion without burning a hole in your pocket. This makes Beyoung a good brand that you must explore to buy the latest, stylish, and reasonably priced clothes.' },
      {
        question: 'Is It Safe to Buy Clothes from Beyoung Website? Are the Products of Premium Quality?',
        answer: 'Are you wondering if Beyoung is safe or not? Our website and mobile application are designed with the safety of our customers in mind. Beyoung is a safe and secure platform to buy high-quality and affordable fashion. We prioritize securing the information and transactions of our customers. Our commitment to using quality materials and offering our collections at affordable prices makes Beyoung a good and safe brand.We have implemented the latest systems and designs to ensure that the purchases you make are safe and secure. Beyoung provides its customers with a secured platform with advanced encryption for payment processes and ensures the complete safety of our customer’s data. Latest secure technologies To provide a secure shopping experience, Beyoung uses the latest HTTPS technology to process payments and ensure complete safety and protection for our customers. This way we encrypt all communication between our website and your browser making the transaction process even more secure. We use secured networks to keep your personal information safe and confidential. We regularly scan the website and keep the information encrypted using a Secure Sockets Layer (SSL) technology. Furthermore, we have partnered with leading payment gateways to keep your information even more secure.'
      },
    ],
  };

  const handleHeadingClick = (section) => {
    setActiveSection(section);
    setActiveIndex(null); // Reset active FAQ item when changing section
  };

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    // <div className="mt-32 faqcontainer flex flex-col-reverse w-full bg-cover bg-center" style={{ backgroundImage: "url('images/DesktopExplorationbackground.jpg')" }}>
    //   <section className="faq-section order-2 md:flex">
    //     <div className='w-1/2'>
    //     {Object.keys(faqItems).map((section) => (
    //       <h3
    //         key={section}
    //         className="text-black uppercase mb-5 ml-12 md:ml-10 text-lg md:text-xl cursor-pointer"
    //         onClick={() => handleHeadingClick(section)}
    //       >
    //         {section.replace(/([A-Z])/g, ' $1').trim()}
    //       </h3>
    //     ))}
    //     </div>
    //     <div className="faq border-t border-white border-opacity-30 w-3/5 ml-20 md:w-11/12 md:ml-7">
    //       {faqItems[activeSection].map((item, index) => (
    //         <div key={index} className="faq-item border-b border-white border-opacity-30">
    //           <button
    //             className={`faq-question w-full bg-transparent border-none text-left px-4 py-3 text-base cursor-pointer relative ${activeIndex === index ? 'active' : ''}`}
    //             onClick={() => toggleAnswer(index)}
    //           >
    //             Q: {item.question}
    //             <span className={`absolute right-5 w-2.5 h-2.5 border-r-2 border-b-2 border-black transform rotate-45 transition-transform ${activeIndex === index ? 'rotate-[-135deg]' : ''}`}></span>
    //           </button>
    //           <div
    //             className={`faq-answer overflow-hidden transition-all duration-300 ease-in-out px-4 py-2 bg-white bg-opacity-10 ${activeIndex === index ? 'max-h-[1000px] visible' : 'max-h-0 invisible'}`}
    //           >
    //             <p className="text-sm">{item.answer}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </section>
    
    // </div>
    <div className="mt-32 faqcontainer flex flex-col-reverse w-full bg-cover bg-center" style={{ backgroundImage: "url('images/DesktopExplorationbackground.jpg')" }}>
  <section className="faq-section order-2 md:flex">
  <div className='w-1/2 border-r-2 border-gray'>
  {Object.keys(faqItems).map((section) => (
    <h3
      key={section}
      className={`text-black uppercase mb-5 pl-4 md:pl-6 text-lg md:text-xl cursor-pointer border-r-4 ${activeSection === section ? 'border-yellow-500' : 'border-white'}`}
      onClick={() => handleHeadingClick(section)}
    >
      <span className='bg-white'>★</span> {section.replace(/([A-Z])/g, ' $1').trim()}
    </h3>
  ))}
</div>

    <div className="faq border-t border-white border-opacity-30 w-3/5 ml-20 md:w-11/12 md:ml-7">
      {faqItems[activeSection].map((item, index) => (
        <div key={index} className="faq-item border-b border-white border-opacity-30">
          <button
            className={`faq-question w-full bg-transparent border-none text-left px-4 py-3 text-base cursor-pointer relative ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAnswer(index)}
          >
            Q: {item.question}
            <span className={`absolute right-5 w-2.5 h-2.5 border-r-2 border-b-2 border-black transform rotate-45 transition-transform ${activeIndex === index ? 'rotate-[-135deg]' : ''}`}></span>
          </button>
          <div
            className={`faq-answer overflow-hidden transition-all duration-300 ease-in-out px-4 py-2 bg-white bg-opacity-10 ${activeIndex === index ? 'max-h-[1000px] visible' : 'max-h-0 invisible'}`}
          >
            <p className="text-sm">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
</div>

  );
};

export default FAQ;
