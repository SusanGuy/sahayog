import React from 'react';
import * as Icons from 'react-feather';

const Nav = ({ scroll, hamburger }) => {
    console.log(scroll);
    return (
        <nav className={`${!scroll ? 'nav' : 'nav nav-sticky'}`}>
            <div className='searchbar'>
                <Icons.Menu
                    onClick={() => {
                        console.log('heroaayo');
                        hamburger();
                    }}
                />

                <input type='text' placeholder='Find campaign, charities' />
                <Icons.Search />
            </div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/f/fe/Michelle_Borromeo_Actor_Headshots_30.jpg' />
        </nav>
    );
};

export default Nav;
