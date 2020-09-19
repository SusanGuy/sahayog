import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import FlipNumbers from "react-flip-numbers";
const Donate = ({ target }) => {
  const [donation, setdonation] = useState(0);
  // const CountHook = ({ previous, donation, limit }) => {
  //     const { countUp } = useCountUp({
  //         start: previous * limit / 100,
  //         end: donation * limit / 100,
  //         delay: 0,
  //         duration: 0.5
  //     });

  //     return <div>${countUp}</div>;
  // };
  const handleDonation = ({ target }) => {
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
          <h2>Donate</h2>
          <h1>
            $
            <FlipNumbers
              height={17}
              width={15}
              play
              perspective={100}
              numbers={donation.toString()}
            />
          </h1>
          <h2>
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
          <FlipNumbers
            height={20}
            width={20}
            color={"white"}
            numberStyle={{
              fontWeight: "bolder",
            }}
            play
            perspective={100}
            numbers={donation.toString()}
          />
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
        <span>$100k</span>
      </div>
    </div>
  );
};
export default Donate;
