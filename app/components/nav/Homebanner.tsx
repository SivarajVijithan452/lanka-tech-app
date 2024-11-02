"use client"; 

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdArrowForward, MdArrowBack } from 'react-icons/md'; // Import arrow icons

const images = [
    { src: "/banner1.jpg" }, // Update with the correct image path
    { src: "/banner2.jpg" }
];

const Homebanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="flex flex-col min-h-screen relative">
            <div className="relative w-full h-[600px] overflow-hidden">
                {images.map(({ src }, index) => (
                    <div
                        className={`min-w-full transition-opacity duration-1000 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                        key={index}
                    >
                        <Link href="">
                            <Image
                                src={src}
                                alt={`Banner Image ${index + 1}`}
                                className="absolute top-0 left-0 w-full h-full object-cover"
                                layout="fill" 
                            />
                        </Link>
                    </div>
                ))}
            </div>
            {/* Navigation Arrows */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow">
                <MdArrowBack size={30} />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow">
                <MdArrowForward size={30} />
            </button>
        </div>
    );
}

export default Homebanner;
