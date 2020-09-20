import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import { useCountUp } from "react-countup";

var abbreviate = require("number-abbreviate");

const Donate = ({ target }) => {
  const [donation, setdonation] = useState(0);
  const [previous, setprevious] = useState(0);
  const CountHook = ({ previous, donation }) => {
    const { countUp } = useCountUp({
      end: donation,
      start: previous,
      delay: 0,
      duration: 0.5,
      preserveValue: true,
    });

    return <div>{countUp}</div>;
  };
  const handleDonation = ({ target }) => {
    setprevious(donation);
    setdonation(target.value);
  };

  return (
    <div className="Donate">
      <div
        className="donation-fill"
        style={{ width: `${(donation / target) * 100}%` }}
      />
      <div className="slider-before">
        <div className="header">
          <BackButton color="rgb(34, 27, 27)" />
          <span>Add comment</span>
        </div>

        <img
          style={{
            height: window.innerHeight * 0.45,
          }}
          src="https://i.pinimg.com/originals/71/21/85/712185683557a51c87a1d821a251d183.jpg"
        />
        <div className="donate-title">
          <h2 style={{ fontWeight: 400 }}>Donate</h2>
          <h1>
            $<CountHook donation={donation} previous={previous} />
          </h1>

          <h2 style={{ fontWeight: 400 }}>
            to help this <span>Rainforest</span> recover
          </h2>
        </div>
      </div>
      <SliderWrapper
        target={target}
        donation={donation}
        changeDonation={handleDonation}
      />
      <div className="button-container">
        <Button height="100%">
          Donate &nbsp;<span style={{ fontWeight: "bolder" }}>$</span>
          <CountHook donation={donation} previous={previous} />
        </Button>
      </div>
    </div>
  );
};

const SliderWrapper = ({ target, donation, changeDonation }) => {
  return (
    <div className="slider-wrapper">
      <input
        className="slider"
        type="range"
        min="0"
        max={target}
        onChange={changeDonation}
        value={donation}
      />
      <div className="donation-detail">
        <span>$0</span>
        <span>${abbreviate(target, 1)}</span>
      </div>
    </div>
  );
};
export default Donate;
