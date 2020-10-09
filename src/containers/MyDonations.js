import React, { useState } from "react";
import * as Icons from "react-feather";
import "./MyDonations.scss";
import Hamburger from "../components/Hamburger";
import { motion, AnimatePresence } from "framer-motion";
const MyDonations = ({ deleteButton }) => {
  const [hamburger, sethamburger] = useState(false);

  const fRaisers = [
    {
      title: "This is the cause",
      donation: 1200,
    },
    {
      title: "This is the cause",
      donation: 1200,
    },
    {
      title: "This is the cause",
      donation: 1200,
    },
    {
      title: "This is the cause",
      donation: 1200,
    },
  ];

  return (
    <div
      className="MyDonations"
      onClick={() => {
        hamburger && sethamburger(false);
      }}
    >
      <div className="hamburger-button">
        <Icons.Menu
          onClick={() => {
            sethamburger(true);
          }}
        />
        <span>My {deleteButton ? "Favorites" : "Donations"}</span>
      </div>
      <AnimatePresence initial={false}>
        {hamburger && <Hamburger handleBurger={sethamburger} />}
      </AnimatePresence>
      <div className="donations">
        <div className="title">
          <span>{deleteButton ? "Favorites" : "Donations"}</span>
        </div>
        <div className="donation-cards">
          {fRaisers.map(({ title, donation }) => (
            <div className="donation-card">
              <div className="left">
                <div className="cause">{title}</div>
                <div className="donation">
                  Your Donation: <span>${donation}</span>
                </div>
              </div>
              <div className="right">
                {deleteButton ? (
                  <Icons.Trash color="red" />
                ) : (
                  <Icons.ChevronRight />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div />
    </div>
  );
};

export default MyDonations;
