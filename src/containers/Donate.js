import React, { useState, useEffect } from 'react';
// import SliderWrapper from '../components/Slider';
import * as Icons from 'react-feather';
import Button from '../components/Button';
import './Donate.scss';
import FlipNumbers from 'react-flip-numbers';
// import CountUp, { useCountUp } from 'react-countup';
const Donate = ({ limit }) => {
    const [ donation, setdonation ] = useState(0);
    const [ previous, setprevious ] = useState(0);

    const handleDonation = ({ target }) => {
        setprevious(donation);
        setdonation(target.value);
    };

    // const CountHook = ({ previous, donation, limit }) => {
    //     const { countUp } = useCountUp({
    //         start: previous * limit / 100,
    //         end: donation * limit / 100,
    //         delay: 0,
    //         duration: 0.5
    //     });

    //     return <div>${countUp}</div>;
    // };

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
                <div style={{ display: 'flex', margin: '2rem 0' }}>
                    <span style={{ alignSelf: 'center', fontSize: '5rem' }}>$</span>
                    {
                        <FlipNumbers
                            height={40}
                            width={30}
                            color='black'
                            background='transparent'
                            play
                            perspective={100}
                            numbers={`${limit * donation / 100}`}
                            numberStyle={{
                                textAlign: 'left',
                                alignSelf: 'flex-start',
                                color: 'black',
                                height: '4rem',
                                width: '3rem',
                                padding: 0,
                                margin: 0,
                                fontSize: '1.7rem'
                            }}
                        />
                    }
                </div>
                <div className='donation-cause'>to help this Rainforest recover</div>
            </div>
            <SliderWrapper donation={donation} changeDonation={handleDonation} />
            <div className='button-container'>
                <Button text={`Donate $${limit * donation / 100}`} />
            </div>
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
