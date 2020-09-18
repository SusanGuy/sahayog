import React, { useState } from 'react';
// import SliderWrapper from '../components/Slider';
import * as Icons from 'react-feather';
import Button from '../components/Button';
const Donate = () => {
    const [ donation, setdonation ] = useState(0);

    const handleDonation = ({ target }) => {
        setdonation(target.value);
    };
    return (
        <div className='donation-wrapper'>
            <div className='donation-fill' style={{ width: `${donation}%` }} />
            <div className='back-button-bar'>
                <div className='back-button'>
                    <Icons.ChevronLeft />
                    <span>Back</span>
                </div>
                <div className='add-comment'>Add comment</div>
            </div>
            <div className='middle-image'>
                <img src='https://i.pinimg.com/originals/71/21/85/712185683557a51c87a1d821a251d183.jpg' />
            </div>
            <div className='Donation-Container'>
                <div>Donate</div>
                <div className='donation-amount'>$700</div>
                <div className='donation-cause'>to help this Rainforest recover</div>
            </div>
            <SliderWrapper donation={donation} changeDonation={handleDonation} />
            <Button text='Donate $700' />
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
