import React from 'react';
import Slideshow from './Slideshow';

const FieldRating = () => {
    return (
        <div className='mt-48 h-40 max-w-7xl mx-auto flex items-center justify-between'>
            <div className='space-y-2.5'>
                <h1 className='text-5xl font-bold'>The Ultimate <br /> Field Selection Here</h1>
                <p>Choose the perfect playground for every match and every moment.</p>
            </div>
            <div>
                <Slideshow></Slideshow>
            </div>
        </div>
    );
};

export default FieldRating;