import React, { useState, useEffect } from 'react';
import * as Icons from 'react-feather';
import moment from 'moment';
import axios from '../axios';
import ContentLoader from '../components/ContentLoader';

const MyDonations = ({ deleteButton, hamburger, setHamBurger, history }) => {
    const [ donations, setdonations ] = useState([]);
    const [ loading, setloading ] = useState(true);
    const [ deleteDono, setdelete ] = useState(false);
    useEffect(
        () => {
            setloading(true);
            try {
                if (deleteButton) {
                    axios.get('users/favorites').then((data) => {
                        setdonations(data.data);
                        console.log(data.data);
                    });
                    setloading(false);
                } else {
                    axios.get('users/me/donations/').then((data) => {
                        setdonations(data.data);
                    });
                    setloading(false);
                }
            } catch (e) {
                console.log(e);
                setloading(false);
            }
        },
        [ deleteDono ]
    );

    return (
        <div
            className='MyDonations'
            onClick={() => {
                hamburger && setHamBurger(false);
            }}
        >
            <div className='hamburger-button'>
                <Icons.Menu
                    onClick={() => {
                        setHamBurger(true);
                    }}
                />
                <span>My {deleteButton ? 'Favorites' : 'Donations'}</span>
            </div>

            <div className='donations'>
                <div className='title'>
                    <span>{deleteButton ? 'Favorites' : 'Donations'}</span>
                </div>
                <div className='donation-cards'>
                    {loading ? (
                        <ContentLoader />
                    ) : (
                        donations.map((hero) => {
                            console.log(donations);
                            if (deleteButton) {
                                const { cause: { title, _id, endDate }, amount: donation, _id: dID } = hero;
                                return (
                                    <div className='donation-card' onClick={() => history.push(`/campaign/${_id}`)}>
                                        <div className='left'>
                                            <div className='cause'>{title}</div>
                                            {!deleteButton ? (
                                                <div className='donation'>
                                                    Your Donation: <span>${donation}</span>
                                                </div>
                                            ) : (
                                                <div className='donation'>
                                                    End Date: {moment(endDate).format('MMM DD, YYYY')}
                                                </div>
                                            )}
                                        </div>
                                        <div className='right'>
                                            {deleteButton ? (
                                                <Icons.Trash
                                                    color='red'
                                                    onClick={async (e) => {
                                                        e.stopPropagation();
                                                        try {
                                                            setdelete(!deleteDono);
                                                            await axios.delete(`/users/favorites/${dID}`);

                                                            setdonations(
                                                                [ ...donations ].filter(
                                                                    ({ _id }) => _id.toString() !== dID
                                                                )
                                                            );
                                                        } catch (error) {
                                                            console.log('couldnt delete');
                                                        }
                                                    }}
                                                />
                                            ) : (
                                                <Icons.ChevronRight />
                                            )}
                                        </div>
                                    </div>
                                );
                            } else {
                                const { cause: { title, _id: cID }, amount: donation, _id } = hero;
                                return (
                                    <div className='donation-card' onClick={() => history.push(`/campaign/${cID}`)}>
                                        <div className='left'>
                                            <div className='cause'>{title}</div>
                                            {
                                                <div className='donation'>
                                                    Your Donation: <span>${donation}</span>
                                                </div>
                                            }
                                        </div>
                                        <div className='right'>
                                            <Icons.ChevronRight />
                                        </div>
                                    </div>
                                );
                            }
                        })
                    )}
                </div>
            </div>

            <div />
        </div>
    );
};

export default MyDonations;
