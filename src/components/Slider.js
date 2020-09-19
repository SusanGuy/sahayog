import React from 'react';
const Slider = ({ raised, goal }) => {
    return (
        <div className='slider'>
            <div className='slider-fill' style={{ width: `${Math.floor(raised * 100 / goal)}%` }} />
        </div>
    );
};

export default Slider;
