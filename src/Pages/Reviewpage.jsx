// import React, { useState } from 'react'
// import { faCheck } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// function Review() {

//     const [isClicked, setIsClicked] = useState(false);

//     const handleClick = () => {
//         setIsClicked(!isClicked);
//     };

//     return (
//         <div>


//             <div className='flex justify-around mt-10'>
//                 <p className='text-xl font-bold'>Give Your Review</p>
//                 <div>
//                     <span className='text-yellow-300 text-[46px]'> ★ </span>
//                     <span className='text-yellow-300 text-[46px]'> ★ </span>
//                     <span className='text-yellow-300 text-[46px]'> ★ </span>
//                     <span className='text-yellow-300 text-[46px]'> ★ </span>
//                     <span className='text-yellow-300 text-[46px]'> ★ </span>
//                     <span style={{
//                         display: 'inline-flex',
//                         alignItems: 'center',
//                         padding: '10px 10px',
//                         borderRadius: '5px',
//                         backgroundColor: isClicked ? 'green' : 'transparent',
//                         color: isClicked ? 'white' : 'green',
//                         cursor: 'pointer',
//                         borderRadius: '50%',
//                     }}
//                         onClick={handleClick}> <FontAwesomeIcon icon={faCheck} style={{ color: isClicked ? 'white' : 'green', fontSize: '24px' }} /> </span>
//                     <span className='font-bold text-xl '> 3 out of 5</span>
//                 </div>
//             </div>
           
//             <div className='mt-10'>
//                 <h2 className='font-bold text-2xl'>Customer reviews</h2>
//                 <div className='flex justify-around mt-10'>
//                 <div>
//                 <span className='text-yellow-300 text-[46px]'> ★ </span>
//                 <span className='text-yellow-300 text-[46px]'> ★ </span>
//                 <span className='text-yellow-300 text-[46px]'> ★ </span>
//                 <span className='text-yellow-300 text-[46px]'> ★ </span>
//                 <span className='text-yellow-300 text-[46px]'> ★ </span>
                
//                 <p className='space-x-8'><span>10 customers rating</span>
//                 <span className='font-bold'>4 out of 5</span></p>
//                </div>
//                  <div>
//                     <div className=" flex items-center space-x-2">
//                         <span className='text-sky-500'>5 star</span>
//                         <div className="relative w-[180px] h-4 bg-gray-300 rounded-full">
//                             <div
//                                 className="absolute top-0 left-0 h-full bg-green-700 rounded-full"
//                                 style={{ width: `62%` }}
//                             />
//                         </div>
//                         <span className='text-sky-500'>62%</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                         <span className='text-sky-500'>4 star</span>
//                         <div className="relative w-[180px] h-4 bg-gray-300 rounded-full">
//                             <div
//                                 className="absolute top-0 left-0 h-full bg-green-700 rounded-full"
//                                 style={{ width: `50%` }}
//                             />
//                         </div>
//                         <span className='text-sky-500'>50%</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                         <span className='text-sky-500'>3 star</span>
//                         <div className="relative w-[180px] h-4 bg-gray-300 rounded-full">
//                             <div
//                                 className="absolute top-0 left-0 h-full bg-green-700 rounded-full"
//                                 style={{ width: `30%` }}
//                             />
//                         </div>
//                         <span className='text-sky-500'>30%</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                         <span className='text-sky-500'>2 star</span>
//                         <div className="relative w-[180px] h-4 bg-gray-300 rounded-full">
//                             <div
//                                 className="absolute top-0 left-0 h-full bg-green-700 rounded-full"
//                                 style={{ width: `10%` }}
//                             />
//                         </div>
//                         <span className='text-sky-500'>10%</span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                         <span className='text-sky-500'>1 star</span>
//                         <div className="relative w-[180px] h-4 bg-gray-300 rounded-full">
//                             <div
//                                 className="absolute top-0 left-0 h-full bg-green-700 rounded-full"
//                                 style={{ width: `2%` }}
//                             />
//                         </div>
//                         <span className='text-sky-500'>2%</span>
//                     </div>
//                  </div>
//             </div>
//         </div>

//         </div>
//     )
// }

// export default Review






import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function ReviewComponent({ productId }) {
    const [rating, setRating] = useState(0);
    const [reviews, setReviews] = useState([]);
    const [averageRating, setAverageRating] = useState(0);
    const [totalReviews, setTotalReviews] = useState(0);
    const [ratingsPercentage, setRatingsPercentage] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        // Fetch reviews and rating breakdown
        axios.get(`http://localhost:5000/api/reviews/${productId}`)
            .then(response => {
                const data = response.data;
                setReviews(data.reviews);
                setAverageRating(data.averageRating);
                setTotalReviews(data.totalReviews);
                setRatingsPercentage(data.ratingsPercentage || []);
            })
            .catch(error => {
                console.error('Error fetching review data:', error);
            });
    }, [productId]);

    const handleRatingClick = (rate) => {
        setRating(rate);
    };

    const fetchReviews = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/reviews/${productId}`);
          const { reviews, ratingsPercentage, averageRating, totalReviews } = response.data;
        
          // Use the fetched data appropriately
          console.log("reviews:",reviews);
          console.log("ratingsPercentage:",ratingsPercentage);
          console.log("averageRating:",averageRating);
          console.log("totalReviews:",totalReviews);
          setReviews(reviews);
          setAverageRating(averageRating);
          setTotalReviews(totalReviews);
          setRatingsPercentage(ratingsPercentage || []);
         
        } catch (error) {
          console.error('Error fetching reviews:', error.message);
        }
      };

    const handleSubmitReview = () => {
        const token = localStorage.getItem('token');
        axios.post('http://localhost:5000/api/reviews', { 
            productId, 
            rating 
        }, {
            headers: {
                'Authorization': `${token}` 
            }
        })
            .then(response => {
                console.log('Review submitted:', response.data);
                setIsClicked(true);
                fetchReviews();
                
                // axios.get(`http://localhost:5000/api/reviews/${productId}`)
                    // .then(response => {
                    //     const data = response.data;
                    //     setReviews(data.reviews);
                    //     setAverageRating(data.averageRating);
                    //     setTotalReviews(data.totalReviews);
                    //     setRatingsPercentage(data.ratingsPercentage || []);
                    //     console.log("all", setReviews,setAverageRating,setTotalReviews,setRatingsPercentage);
                    // })
                    // .catch(error => {
                    //     console.error('Error fetching review data:', error);
                    // });
                   
                      
            })
            .catch(error => {
                console.error('Error submitting review:', error);
            });
    };

    return (
        <div className='mt-10'>
            <h2 className='font-bold text-xl mb-10'>Customer Reviews</h2>
           
         <div className='flex flex-col md:flex-row justify-around'>
         
            <div>
            <div className='flex ml-[20%] md:ml-[0%]'>
                 <span className='text-yellow-300 text-[46px]'> ★ </span>
                 <span className='text-yellow-300 text-[46px]'> ★ </span>
                 <span className='text-yellow-300 text-[46px]'> ★ </span>
                 <span className='text-yellow-300 text-[46px]'> ★ </span>
                 <span className='text-yellow-300 text-[46px]'> ★ </span>
            </div>
            <p>{totalReviews} customers rating</p>
            <p>{averageRating.toFixed(1)} out of 5</p>
               </div>
            <div className='ml-[20%] mt-5 md:ml-[0%]'>
            {[5, 4, 3, 2, 1].map((star, index) => (
                <div key={star} className="flex items-center space-x-2">
                    <span>{star} star</span>
                    <div className="relative w-[180px] h-4 bg-gray-300 rounded-full">
                        <div
                            className="absolute top-0 left-0 h-full bg-green-700 rounded-full"
                            style={{ width: `${ratingsPercentage[star - 1] || 0}%` }} 
                        />
                    </div>
                   <span>{ratingsPercentage[star - 1] ? ratingsPercentage[star - 1] : 0}%</span>   {/*ratingsPercentage[star - 1].toFixed(2) decimal number*/}
                </div>
            ))}

           </div>
      </div>



            <div className="mt-8">
                <h3 className='font-bold text-xl mb-3'>Submit Your Review</h3>
                <div className='ml-[4%]'>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={star <= rating ? 'text-yellow-300' : 'text-gray-300'}
                            onClick={() => handleRatingClick(star)}
                            style={{ fontSize: '46px', cursor: 'pointer' }}
                        >
                            ★
                        </span>
                    ))}
                    <span
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            padding: '10px 10px',
                            borderRadius: '50%',
                            backgroundColor: isClicked ? 'green' : 'transparent',
                            color: isClicked ? 'white' : 'green',
                            cursor: 'pointer',
                            marginLeft: '10px'
                        }}
                        onClick={handleSubmitReview}
                    >
                        <FontAwesomeIcon icon={faCheck} style={{ fontSize: '24px' }} />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ReviewComponent;

