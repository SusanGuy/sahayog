import React from "react";
import * as Icons from "react-feather";

const ImageDiv = () => {
  return <div className="donation_image_div"></div>;
};

const FloatingDiv = () => {
  return (
    <div className="floating_div">
      <div className="bookmark">
        <Icons.Bookmark size="3rem" color="white" fill="white" />
      </div>
      <div className="dash"></div>
      <div className="types">
        <span className="type">Medical</span>
        <span className="type">Emergency</span>
      </div>
      <h1>Help Rainforest in Borneo Recover from fire</h1>
      <div className="campaign-info">
        <span className="organizer">
          Organized by <span className="name">Sushant Baskota</span>
        </span>
        <span className="date">
          <span className="day">39 </span>
          days left
        </span>
      </div>
      <div className="amount-info">
        <div className="amount-title">
          <span>Raised so far</span>
          <span>Target</span>
        </div>
        <div className="amount">
          <span className="total">
            $296.235 <span className="percentage">(75%)</span>
          </span>
          <span className="target">$400.0000</span>
        </div>
      </div>
      <div className="donors-list">
        <span className="title">Recent Donors</span>
        <div className="donors">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Pulitzer2018-portraits-kendrick-lamar.jpg" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Pulitzer2018-portraits-kendrick-lamar.jpg" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Pulitzer2018-portraits-kendrick-lamar.jpg" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Pulitzer2018-portraits-kendrick-lamar.jpg" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Pulitzer2018-portraits-kendrick-lamar.jpg" />
          <div>99+</div>
        </div>
        <div className="content-title">
          <span className="story active">Story</span>
          <span className="updates">
            Updates <span className="grey-out">(13)</span>
          </span>
          <span className="comments">
            Comments <span className="grey-out">(69)</span>
          </span>
        </div>
        <div className="main-content"></div>
      </div>
    </div>
  );
};
const Donation = () => {
  return (
    <div className="Donation">
      <ImageDiv />
      <FloatingDiv />
    </div>
  );
};

export default Donation;
