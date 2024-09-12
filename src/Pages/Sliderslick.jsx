// // import React from "react";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// // function Sliderslick() {
// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 3,
// //     slidesToScroll: 1,
// //     responsive: [
// //       {
// //         breakpoint: 768,
// //         settings: {
// //           slidesToShow: 1,
// //           slidesToScroll: 1,
// //         },
// //       },
// //       {
// //         breakpoint: 1024,
// //         settings: {
// //           slidesToShow: 2,
// //           slidesToScroll: 1,
// //         },
// //       },
// //     ],
// //   };

// //   return (
// //     <div className="slider-container">
// //       <Slider {...settings}>
// //         <div>
// //           <img src="https://via.placeholder.com/300" alt="Slide 1" />
// //         </div>
// //         <div>
// //           <img src="https://via.placeholder.com/300" alt="Slide 2" />
// //         </div>
// //         <div>
// //           <img src="https://via.placeholder.com/300" alt="Slide 3" />
// //         </div>
// //         <div>
// //           <img src="https://via.placeholder.com/300" alt="Slide 4" />
// //         </div>
// //         <div>
// //           <img src="https://via.placeholder.com/300" alt="Slide 5" />
// //         </div>
// //       </Slider>
// //     </div>
// //   );
// // }

// // export default Sliderslick;


// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../Styles/CustomSlider.css"; 
// import clothscat2 from "../images/clothscat2.jpg";
// import furniture from "../images/furniture.png";
// import electronicscat from "../images/electronicscat.jpg";
// import shoescat from "../images/shoescat.jpg";

// function SimpleSlider() {
//   const settings = {
//     dots: true,           
//     infinite: true,      
//     speed: 500,           
//     slidesToShow: 3,      
//     slidesToScroll: 1,   
//     nextArrow: <NextArrow />, 
//     prevArrow: <PrevArrow />, 
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   const slides = [clothscat2, furniture,  shoescat, electronicscat,];


//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//       {slides.map((slide, index) => (
//               <div
//                 key={index}
//                 className=""
//                 // style={{ minWidth: "25%", height: "30%" }}
//               >
//                 <img
//                   src={slide}
//                   alt={`Slide ${index + 1}`}
//                   className=""
//                 />
              
//               </div>
//             ))}
//       </Slider>
//     </div>
//   );
// }

// function NextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", right: 10, zIndex: 2 }} // Customize the style here
//       onClick={onClick}
//     >
//       <button className="custom-next-arrow">Next</button>
//     </div>
//   );
// }

// function PrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", left: 10, zIndex: 2 }} // Customize the style here
//       onClick={onClick}
//     >
//       <button className="custom-prev-arrow">Prev</button>
//     </div>
//   );
// }

// export default SimpleSlider;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Styles/CustomSlider.css"; 
import clothscat2 from "../images/clothscat2.jpg";
import furniture from "../images/furniture.png";
import electronicscat from "../images/electronicscat.jpg";
import shoescat from "../images/shoescat.jpg";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [clothscat2, furniture, shoescat, electronicscat];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide} alt={`Slide ${index + 1}`} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: 10, zIndex: 2 }}
      onClick={onClick}
    >
      <button className="custom-next-arrow">&gt;</button>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: 10, zIndex: 2 }}
      onClick={onClick}
    >
      <button className="custom-prev-arrow">&gt;</button>
    </div>
  );
}

export default SimpleSlider;


