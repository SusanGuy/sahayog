import React from 'react';
import * as Icons from 'react-feather';

const Nav = () => {
    return (
        <nav className='nav'>
            <div className='searchbar'>
                <Icons.Menu />
                <input type='text' placeholder='Find campaign, charities' />
                <Icons.Search />
            </div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/f/fe/Michelle_Borromeo_Actor_Headshots_30.jpg' />
        </nav>
    );
};

export default Nav;
