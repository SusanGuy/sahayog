import React from 'react';
import './Slider.scss';
const Slider = ({ raised, goal }) => {
    return (
        <div
            style={
                window.innerHeight > 700 ? (
                    {
                        height: window.innerHeight * 0.01
                    }
                ) : (
                    {
                        height: '3rem'
                    }
                )
            }
            className='filler'
        >
            <div className='slider-fill' style={{ width: `${Math.floor(raised * 100 / goal)}%` }} />
        </div>
    );
};

export default Slider;
