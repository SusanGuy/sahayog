import React, { useState } from 'react';
import HamburgerButton from '../components/HamburgerButton';
import Hamburger from '../components/Hamburger';
import { motion, AnimatePresence } from 'framer-motion';
import moment from 'moment';
import Slider from '../components/Slider';
import './MyFundraiser.scss';
const MyFundraiser = () => {
    const [ hamburger, sethamburger ] = useState(false);

    const fundraisers = [
        {
            title: 'yo chai title ho',
            src:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7jPPPDwghudK3gqQK8XxKOuyfQoB1brFLqA&usqp=CAU',
            raised: 5000,
            goal: 10000,
            endDate: new Date()
        },

        {
            title: 'yo chai title ho',
            src:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7jPPPDwghudK3gqQK8XxKOuyfQoB1brFLqA&usqp=CAU',
            raised: 5000,
            goal: 10000,
            endDate: new Date()
        },
        {
            title: 'yo chai title ho',
            src:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7jPPPDwghudK3gqQK8XxKOuyfQoB1brFLqA&usqp=CAU',
            raised: 5000,
            goal: 10000,
            endDate: new Date()
        },
        {
            title: 'yo chai title ho',
            src:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7jPPPDwghudK3gqQK8XxKOuyfQoB1brFLqA&usqp=CAU',
            raised: 5000,
            goal: 10000,
            endDate: new Date()
        },
        {
            title: 'yo chai title hoaskdhasdklfhqsdkjlfhsadkljfhaskdljfhasdlkjfhsadkljhsadkjfh',
            src:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7jPPPDwghudK3gqQK8XxKOuyfQoB1brFLqA&usqp=CAU',
            raised: 6000,
            goal: 10000,
            endDate: new Date()
        },
        {
            title: 'yo chai title ho',
            src:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7jPPPDwghudK3gqQK8XxKOuyfQoB1brFLqA&usqp=CAU',
            raised: 5000,
            goal: 10000,
            endDate: new Date()
        }
    ];
    return (
        <div className='MyFundraisers' onClick={hamburger ? () => sethamburger(false) : () => {}}>
            <HamburgerButton sethamburger={sethamburger} title='My Fundraisers' />
            <AnimatePresence initial={false}>{hamburger && <Hamburger handleBurger={sethamburger} />}</AnimatePresence>
            <div className='title'>
                <span>Fundraisers</span>
            </div>

            <div className='fund-cards'>
                {fundraisers.map(({ title, endDate, src, raised, goal, i }) => (
                    <div key={i} className='fund-card'>
                        <div className='left'>
                            <img src={src} />
                        </div>
                        <div className='middle'>
                            <div className='middle-top'>
                                <span>{title}</span>
                            </div>
                            {
                                //<Slider raised={raised} goal={goal} />
                            }
                            <div className='two'>
                                <span>{raised}</span>
                                <span style={{ color: 'black' }}>of</span>
                                <span>{goal}</span>
                            </div>
                        </div>

                        <div className='end'>
                            <span>Ends on:</span>
                            <span className='end-date'> {moment(endDate).format('MMM D, YYYY')}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyFundraiser;
