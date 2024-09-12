// import React, { useState } from 'react'

// function Footer() {
//     const [choosequeopen, setChoosequeopen] = useState(false);
//     const [more, setMore] = useState(false);
//     const istogglechoose = () => {
//         setChoosequeopen(!choosequeopen);
//     }
//     const ismorechoose = () => {
//         setMore(!more);
//     }

//     return (
//         <div className='bg-black'>
//             <div className='flex justify-around '>

//                 <div className='text-start gap-y-14 text-white'>
//                     <div className='text-yellow-300 font-bold'>NEED HELP</div>
//                     <p><a>Contact As</a></p>
//                     <p><a>Tracker Order</a></p>
//                     <p><a>Return & Refund</a></p>
//                     <p><a>FAQ's</a></p>
//                     <p><a>Career</a></p>
//                 </div>
//                 <div className='text-start text-white'>
//                     <div className='text-yellow-300 font-bold'>COMPANY</div>
//                     <p><a>About As</a></p>


//                 </div>
//                 <div className='text-start gap-y-14 text-white'>
//                     <div className='text-yellow-300 font-bold'>MORE INFORMATION</div>
//                     <p><a>Term & Conditions</a></p>
//                     <p><a>Privacy Policy</a></p>
//                     <p><a>Shipping Policy</a></p>
//                 </div>
//                 <div className='text-start gap-y-14 text-white'>
//                     <div className='text-yellow-300 font-bold'>NEED HELP</div>
//                     <p><a>aryansjpr2@gmail.com</a></p>
//                     <p><a>adglobal360,Sirsi road khatipura</a></p>
//                     <p><a>jaipur,india-302012</a></p>
//                 </div>
//             </div>

//             <div className='w-full'>
//                 <div className='flex justify-around w-full text-yellow-300'>
//                     <h1>WHY CHOOSE US</h1>
//                     <span onClick={istogglechoose}>+</span>
//                 </div>
//                 {choosequeopen && (
//                     <div className='text-white'>
//                         <div>
//                             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis excepturi eligendi quaerat in deserunt quasi quae deleniti doloremque sequi ipsum enim fugit vel suscipit, ad quisquam incidunt inventore aspernatur. Enim eaque qui nihil!
//                         </div>
//                         <button onclick={ismorechoose}>read more</button>
//                         {more && (
//                             <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt explicabo ipsa cumque esse numquam, reprehenderit alias facilis architecto, dolor, fuga corrupti! Eos, at? Accusantium perferendis voluptatum officia cumque asperiores rerum, beatae fugit architecto, iusto earum eveniet!</div>
//                         )}


//                     </div>
//                 )

//                 }
//             </div>

//         </div>
//     )
// }

// export default Footer

import React, { useState } from 'react';

function Footer() {
    const [choosequeopen, setChoosequeopen] = useState(false);
    const [more, setMore] = useState(false);
    const [popcatqueopen, setPopcatqueopen] = useState(false);
    const [morepopcat, setMorepop] = useState(false);

    const istogglechoose = () => {
        setChoosequeopen(!choosequeopen);
    };

    const ismorechoose = () => {
        setMore(!more);
    };
    const istogglepopcat = () => {
        setPopcatqueopen(!popcatqueopen);
    }
    const ismorepopcat = () => {
        setMorepop(!morepopcat);
    }



    return (
        <div className="bg-black p-8 mt-10">
            <div className="flex flex-col gap-8 md:flex-row justify-around text-white mb-8 text-sm font-bold">
                <div className="text-start ">
                    <div className="text-yellow-300 text-xl font-bold mb-4">NEED HELP</div>
                    <p><a>Contact Us</a></p>
                    <p><a>Track Order</a></p>
                    <p><a href="/return&refund">Return & Refund</a></p>
                    <p><a href="/faq">FAQ's</a></p>
                    <p><a>Career</a></p>
                </div>
                <div className="text-start">
                    <div className="text-yellow-300 text-xl font-bold mb-4">COMPANY</div>
                    <p><a>About Us</a></p>
                    <p><a href="/fp">fp</a></p>
                    <p><a href="/dp">fp</a></p>
                    <p><a href="/navitems">navbar</a></p>
                </div>
                <div className="text-start">
                    <div className="text-yellow-300 text-xl font-bold mb-4">MORE INFORMATION</div>
                    <p><a href="/termcondition">Terms & Conditions</a></p>
                    <p><a href="/privacypolicy">Privacy Policy</a></p>
                    <p><a href="shipping">Shipping Policy</a></p>
                </div>
                <div className="text-start">
                    <div className="text-yellow-300 text-xl font-bold mb-4">CONTACT US</div>
                    <p><a>aryansjpr2@gmail.com</a></p>
                    <p><a>adglobal360, Sirsi road khatipura</a></p>
                    <p><a>Jaipur, India-302012</a></p>
                </div>
            </div>
            <div className="w-full">
                <div className="flex justify-between items-center w-full text-yellow-300 cursor-pointer font-bold text-xl h-[60px]" >
                    <h1>WHY CHOOSE US ?</h1>
                    <span className='text-2xl' onClick={istogglechoose}>{choosequeopen ? '-' : '+'}</span>
                </div>
                {choosequeopen && (
                    <div className="text-white mt-4">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore omnis excepturi eligendi quaerat in deserunt quasi quae deleniti doloremque sequi ipsum enim fugit vel suscipit, ad quisquam incidunt inventore aspernatur. Enim eaque qui nihil!
                            {!more && '...'}
                        </p>
                        {more && (
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt explicabo ipsa cumque esse numquam, reprehenderit alias facilis architecto, dolor, fuga corrupti! Eos, at? Accusantium perferendis voluptatum officia cumque asperiores rerum, beatae fugit architecto, iusto earum eveniet!
                            </p>
                        )}
                        <button className="text-green-500 mt-2" onClick={ismorechoose}>
                            {more ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                )}
            </div>


            <div className="w-full">
                <div className="flex justify-between items-center w-full text-yellow-300 cursor-pointer font-bold text-xl" >
                    <h1>POPULAR CATEGORIES</h1>
                    <span className='text-2xl' onClick={istogglepopcat}>{popcatqueopen ? '-' : '+'}</span>
                </div>
                {popcatqueopen && (
                    <div className="text-white mt-4">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum consequuntur asperiores quia possimus fugit quos assumenda? Explicabo laudantium totam impedit hic dolorem doloribus ducimus.
                            {!morepopcat && '...'}
                        </p>
                        {morepopcat && (
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, architecto labore consectetur id blanditiis, nam nemo eum fugit, doloribus officia ipsam officiis.
                            </p>
                        )}
                        <button className="text-green-500 mt-2" onClick={ismorepopcat}>
                            {morepopcat ? 'Read Less' : 'Read More'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Footer;
