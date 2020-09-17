import { Slider } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.min.css';
import React from 'react';

const SliderWrapper = ({ donation, changeDonation }) => {
    return (
        <div style={{ zIndex: 4 }}>
            <input className='slider' type='range' min='0' max='100' onChange={changeDonation} value={donation} />
        </div>
    );
};

export default SliderWrapper;
