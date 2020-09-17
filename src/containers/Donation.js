import React, { useState } from 'react';
import SliderWrapper from '../components/Slider';

const Donation = () => {
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

export default Donation;
