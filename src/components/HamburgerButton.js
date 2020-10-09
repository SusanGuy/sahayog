import React from 'react';
import * as Icons from 'react-feather';
const HamburgerButton = ({ title, sethamburger }) => {
    return (
        <div className='hamburger-button'>
            <Icons.Menu
                onClick={() => {
                    sethamburger(true);
                }}
            />
            <span>{title}</span>
        </div>
    );
};

export default HamburgerButton;
