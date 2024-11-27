import { useState } from 'react';
import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.webp';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.webp';

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    };

    const handlePrevious = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length
        );
    };

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
            <div>
                <h1 className='max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl'>
                    We’re changing the way people shop.
                </h1>

                <p className='mt-8 max-w-xl text-lg leading-8'>
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
                    cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
                    aliqua.
                </p>

                <div className='mt-10'>
                    <Link to='products' className='btn btn-primary'>
                        Our Products
                    </Link>
                </div>
            </div>

            {/* Carousel Section */}
            <div className='h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box flex flex-col items-center'>
                {/* Display the current image */}
                <div className='carousel-item'>
                    <img
                        src={carouselImages[currentImageIndex]}
                        alt='Hero'
                        className='rounded-box h-full w-80 object-cover'
                    />
                </div>

                {/* Buttons under the carousel */}
                <div className='flex mt-4 space-x-4'>
                    <button
                        className='btn btn-outline btn-secondary'
                        onClick={handlePrevious}
                    >
                        Previous
                    </button>
                    <button
                        className='btn btn-outline btn-secondary'
                        onClick={handleNext}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
