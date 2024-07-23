import React, { useState, useEffect } from 'react';
import s1 from '../images/s1.jpg';
import s2 from '../images/s2.jpg';
import s3 from '../images/s3.jpg';

function BanerSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { id: 1, image: s1 },
        { id: 2, image: s2 },
        { id: 3, image: s3 }
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full overflow-hidden mt-8">
            <button
                className="absolute top-1/2 transform -translate-y-1/2 left-2.5 bg-black bg-opacity-50 text-white border-none p-2 cursor-pointer z-10 hover:bg-opacity-80 focus:outline-none"
                onClick={prevSlide}
            >
                &lt;
            </button>
            <div className="flex justify-center">
                <img src={slides[currentSlide].image} alt="Slide" className="w-full h-full block" />
            </div>
            <button
                className="absolute top-1/2 transform -translate-y-1/2 right-2.5 bg-black bg-opacity-50 text-white border-none p-2 cursor-pointer z-10 hover:bg-opacity-80 focus:outline-none"
                onClick={nextSlide}
            >
                &gt;
            </button>
        </div>
    );
}

export default BanerSlider;
