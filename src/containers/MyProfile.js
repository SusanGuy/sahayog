import React, { useEffect, useState } from 'react';
import './MyProfile.scss';
import * as Icons from 'react-feather';
import HamburgerButton from '../components/HamburgerButton';
import axios from '../axios';

const MyProfile = ({ history, hamburger, setHamBurger }) => {
    const [ user, setuser ] = useState(null);
    const [ donation, setDonation ] = useState(0);
    const [ loading, setloading ] = useState(true);
    useEffect(() => {
        axios.get('/users/me').then(({ data }) => {
            setuser(data);
        });

        axios.get('/users/me/donations').then(({ data }) => {
            setDonation(data.length);
        });
        return () => {};
    }, []);
    console.log(user);

    return (
        user && (
            <div
                className='MyProfile'
                onClick={(e) => {
                    return hamburger && setHamBurger(false);
                }}
            >
                <HamburgerButton setHamBurger={setHamBurger} />
                <div className='banner'>
                    <div className='avatar-overlay' />
                    <img src={`http://locahost:8000${user.avatar}`} />
                </div>
                <div className='sexyDiv'>
                    <div className='avatar'>
                        <span className='add'>
                            <Icons.PlusCircle color='white' />
                        </span>
                        <img src={`http://locahost:8000${user.avatar}`} />
                    </div>
                    <div className='top'>
                        <span className='name'>{user.name}</span>

                        <div className='couple-couple'>
                            <div className='couple'>
                                <div className='number'>{user.favorites.length}</div>
                                <div>Favorites</div>
                            </div>

                            <div className='couple'>
                                <div className='number'>{donation}</div>
                                <div>Donations</div>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div className='bottom'>
                        <div className='bottom-card'>
                            <span>Change Password</span>
                        </div>
                        <div className='bottom-card' onClick={() => history.push('my-fundraisers')}>
                            <span>My Fundraisers</span>
                        </div>
                        <div className='bottom-card' onClick={() => history.push('/logout')}>
                            <span style={{ color: 'red' }}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default MyProfile;
