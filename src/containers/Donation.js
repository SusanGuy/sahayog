import React, { useState } from 'react';
import * as Icons from 'react-feather';
import Button from '../components/Button';
import { Swipeable } from 'react-swipeable';
import { motion } from 'framer-motion';
import Slider from '../components/Slider';

const ImageDiv = ({ height, setTop }) => {
    const IMG_1 = `https://unsplash.it/342/249`;
    const IMG_2 = `https://unsplash.it/342/250`;
    const IMG_3 = `https://unsplash.it/342/251`;
    const IMG_4 = `https://unsplash.it/342/252`;
    const IMG_5 = `https://unsplash.it/342/253`;
    const IMAGES = [ IMG_1, IMG_2, IMG_3, IMG_4, IMG_5 ];
    const RIGHT = '-1';
    const LEFT = '+1';

    const [ imageIdx, setImageIdx ] = useState(0);

    const onSwiped = (direction) => {
        setTop();
        const change = direction === RIGHT ? RIGHT : LEFT;
        const adjustedIdx = imageIdx + Number(change);
        let newIdx;
        if (adjustedIdx >= IMAGES.length) {
            newIdx = 0;
        } else if (adjustedIdx < 0) {
            newIdx = IMAGES.length - 1;
        } else {
            newIdx = adjustedIdx;
        }
        setImageIdx(newIdx);
    };

    return (
        <Swipeable
            trackMouse
            style={{ touchAction: 'none' }}
            preventDefaultTouchmoveEvent
            onSwipedLeft={() => onSwiped(LEFT)}
            onSwipedRight={() => onSwiped(RIGHT)}
        >
            <motion.div
                animate={{ height }}
                transition={{
                    duration: 0.5
                }}
                className='donation_image_div'
            >
                <div className='go-back'>
                    <Icons.ChevronLeft />
                    <span>Back</span>
                </div>
                <img src={IMAGES[imageIdx]} />
            </motion.div>
        </Swipeable>
    );
};

const FloatingDiv = ({ top, setHeight }) => {
    const Enum = {
        Story: 1,
        Updates: 2,
        Comments: 3
    };
    const [ content, setContent ] = useState(Enum.Story);

    const handleContentClick = (num) => {
        if (!top) {
            setHeight();
            setActive(true);
        }

        setContent(num);
    };
    const [ active, setActive ] = useState(false);
    return (
        <div className='floating_div'>
            <div className='bookmark'>
                <Icons.Bookmark size='3rem' color='white' fill='white' />
            </div>
            <motion.div
                animate={{
                    rotate: active ? 180 : 0
                }}
                transition={{
                    duration: 0.5
                }}
                onClick={() => {
                    setHeight();
                    setActive(!active);
                }}
                className='dash'
            >
                <Icons.ChevronUp />
            </motion.div>
            <div className='types'>
                <span className='type'>Medical</span>
                <span className='type'>Emergency</span>
            </div>
            <h1>Help Rainforest in Borneo Recover from fire</h1>
            <div className='campaign-info'>
                <span className='organizer'>
                    Organized by <span className='name'>Sushant Baskota</span>
                </span>
                <span className='date'>
                    <span className='day'>39 </span>
                    days left
                </span>
            </div>
            <Slider goal={10000} raised={5000} />
            <div className='amount-info'>
                <div className='amount-title'>
                    <span>Raised so far</span>
                    <span>Target</span>
                </div>
                <div className='amount'>
                    <span className='total'>
                        $296.235 <span className='percentage'>(75%)</span>
                    </span>
                    <span className='target'>$400.0000</span>
                </div>
            </div>
            <div className='donors-list'>
                <span className='title'>Recent Donors</span>
                <div className='donors'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/3/32/Pulitzer2018-portraits-kendrick-lamar.jpg' />
                    <img src='https://upload.wikimedia.org/wikipedia/commons/3/32/Pulitzer2018-portraits-kendrick-lamar.jpg' />
                    <img src='https://upload.wikimedia.org/wikipedia/commons/3/32/Pulitzer2018-portraits-kendrick-lamar.jpg' />
                    <img src='https://upload.wikimedia.org/wikipedia/commons/3/32/Pulitzer2018-portraits-kendrick-lamar.jpg' />
                    <img src='https://upload.wikimedia.org/wikipedia/commons/3/32/Pulitzer2018-portraits-kendrick-lamar.jpg' />
                    <div>99+</div>
                </div>
            </div>
            <div className='content-title'>
                <span
                    onClick={() => handleContentClick(Enum.Story)}
                    className={`story ${content === Enum.Story ? 'active' : ''}`}
                >
                    Story
                </span>
                <span
                    onClick={() => handleContentClick(Enum.Updates)}
                    className={`updates ${content === Enum.Updates ? 'active' : ''}`}
                >
                    Updates <span className='grey-out'>(13)</span>
                </span>
                <span
                    onClick={() => handleContentClick(Enum.Comments)}
                    className={`updates ${content === Enum.Comments ? 'active' : ''}`}
                >
                    Comments <span className='grey-out'>(69)</span>
                </span>
            </div>

            <div className='main-content'>
                Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum . Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem IpsumLorem IpsumLorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
                Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                Lorem Ipsum Lorem Ipsum
            </div>
        </div>
    );
};

const ButtonContainer = () => (
    <div className='bottom-buttons'>
        <div className='share'>
            <Icons.Share />
        </div>
        <Button text='Donate' />
    </div>
);

const Donation = () => {
    const [ top, setTop ] = useState(false);
    const handleHeightChange = () => {
        setTop(!top);
    };
    const height = top ? '18vh' : '40vh';
    return (
        <div className='Donation'>
            <ImageDiv
                height={height}
                setTop={() => {
                    if (top) {
                        setTop(!top);
                    }
                    return;
                }}
            />
            <FloatingDiv top={top} setHeight={handleHeightChange} />
            <ButtonContainer />
        </div>
    );
};

export default Donation;
