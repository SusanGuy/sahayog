import React, { Fragment, useState } from "react";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import { useCountUp } from "react-countup";
import numeral from "numeral";
import { motion } from "framer-motion";
import Switcher from "../components/Switcher";
import * as Icons from "react-feather";

const Donate = ({ target }) => {
  const [donation, setDonation] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [slider, setSlider] = useState(true);

  const handleDonation = (value) => {
    if (value < target) {
      setPrevious(donation);
      setDonation(value);
    }
  };

  const CountHook = ({ previous, donation }) => {
    const { countUp } = useCountUp({
      end: donation,
      start: previous,
      delay: 0,
      duration: 0.5,
      preserveValue: true,
    });

    return <span>{countUp}</span>;
  };
  const height = slider ? window.innerHeight * 0.4 : window.innerHeight * 0.3;
  return (
    <div className="Donate">
      <motion.div
        animate={{
          width: !slider ? "0%" : `${(donation / target) * 100}%`,
        }}
        transition={{
          duration: slider ? 0 : 0.2,
        }}
        className="donation-fill"
      />
      <div className="slider-before">
        <div className="header">
          <BackButton color="rgb(34, 27, 27)" />
          <span>Add comment</span>
        </div>

        <motion.img
          animate={{ height }}
          transition={{
            duration: 0.2,
          }}
          src="https://i.pinimg.com/originals/71/21/85/712185683557a51c87a1d821a251d183.jpg"
        />
      </div>
      <div className="slider-wrapper">
        {slider ? (
          <SliderWrapper
            slider={slider}
            setSlider={setSlider}
            previous={previous}
            target={target}
            donation={donation}
            changeDonation={handleDonation}
          />
        ) : (
          <NumpadWrapper
            donation={donation}
            changeDonation={handleDonation}
            slider={slider}
            setSlider={setSlider}
          />
        )}
      </div>
      <div className="button-container">
        <Button height="100%">
          Donate &nbsp;<span style={{ fontWeight: "bolder" }}>$</span>
          <CountHook donation={donation} previous={previous} />
        </Button>
      </div>
    </div>
  );
};

const NumpadWrapper = ({ donation, changeDonation, slider, setSlider }) => {
  const nums = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    "00": "00",
    0: "0",
    "*": <Icons.ChevronLeft />,
  };

  const handleDonation = (key) => {
    let newDonation = donation.toString();

    if (key >= 0 || key <= 9 || key === "00") {
      newDonation = parseInt(`${newDonation + key}`);
    } else {
      const hello = newDonation.slice(0, -1);
      newDonation = hello === "" ? 0 : parseInt(hello);
    }

    changeDonation(newDonation);
  };

  return (
    <div className="numpad-wrapper">
      <div className="top-header">
        <h2>${donation}</h2>
        <Switcher slider={slider} setSlider={setSlider} />
      </div>
      <div className="numpad">
        {Object.keys(nums).map((key) => (
          <span
            key={key}
            onClick={() => handleDonation(key)}
            style={{
              padding: window.innerHeight * 0.02,
            }}
          >
            {nums[key]}
          </span>
        ))}
      </div>
    </div>
  );
};

const SliderWrapper = ({
  slider,
  setSlider,
  previous,
  target,
  donation,
  changeDonation,
}) => {
  const CountHook = ({ previous, donation }) => {
    const { countUp } = useCountUp({
      end: donation,
      start: previous,
      delay: 0,
      duration: 0.5,
      preserveValue: true,
    });

    return <span>{countUp}</span>;
  };
  return (
    <Fragment>
      <div className="donate-title">
        <h2 style={{ fontWeight: 400 }}>Donate</h2>
        <div className="donation-header">
          <h1>
            $<CountHook donation={donation} previous={previous} />
          </h1>
          <Switcher slider={slider} setSlider={setSlider} />
        </div>

        <h2 style={{ fontWeight: 400 }}>
          to help this <span>Rainforest</span> recover
        </h2>
      </div>

      <div className="slider">
        <input
          type="range"
          min="0"
          max={target}
          onChange={({ target: { value } }) => changeDonation(value)}
          value={donation}
        />

        <div className="donation-detail">
          <span>$0</span>
          <span>${numeral(target).format("0.a")}</span>
        </div>
      </div>
    </Fragment>
  );
};
export default Donate;
