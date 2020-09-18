import React, { useState } from 'react';
// import SliderWrapper from '../components/Slider';

const Donate = () => {
    const [ donation, setdonation ] = useState(0);

    const handleDonation = ({ target }) => {
        setdonation(target.value);
    };
    return (
        <div className='donation-wrapper'>
            <div className='donation-fill' style={{ width: `${donation}%` }} />
            <div>
                <img />
            </div>
            <SliderWrapper donation={donation} changeDonation={handleDonation} />
        </div>
    );
};

const SliderWrapper = ({ donation, changeDonation }) => {
    return (
        <div style={{ zIndex: 4 }}>
            <input className='slider' type='range' min='0' max='100' onChange={changeDonation} value={donation} />
        </div>
    );
};

export default Donate;
