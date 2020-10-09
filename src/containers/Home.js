import React, { useState, useEffect, useRef } from "react";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import * as Icons from "react-feather";
import Hamburger from "../components/Hamburger";
import Button from "../components/Button";
import { motion, AnimatePresence } from "framer-motion";

const hero = [
  {
    title: "Help this rainforest recover",
    image:
      "https://www.arcgis.com/sharing/rest/content/items/9ca067092f8b47f68a2bdfe1d36bf72a/resources/1575058013076.jpeg?w=2636",
    goal: 500000,
    raised: 369234,
    daysLeft: 39,
    favorited: false,
  },
  {
    title: "Help Susan from asthma",
    image:
      "https://www.premierhealth.com/images/default-source/women-wisdom-wellness/p-w-mkt60071-attacks-lg.jpg?sfvrsn=a7e285c8_0",
    goal: 5000,
    raised: 2000,
    daysLeft: 39,
    favorited: true,
  },
];

const FundCards = ({ hero, history }) => (
  <div className="fundcards">
    {hero.map(({ title, image, daysLeft, raised, goal }) => (
      <div
        onClick={() => history.push("/campaign/1")}
        key={title}
        className="fcard"
      >
        <div className="top">
          <img src={image} />
          <div className="img-comp">
            <span>{`${daysLeft} days left`}</span>
            <div className="bookmark">
              <Icons.Bookmark />
            </div>
          </div>
        </div>
        <div className="bottom">
          <span className="fundname">{title}</span>
          <Slider />
          <div className="raised-text">
            <span>Total Raised</span>
            <span style={{ fontWeight: 600 }}>
              Rs. &nbsp;
              {`${raised} (${Math.floor((raised * 100) / goal)}%)`}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const Home = ({ history }) => {
  const {
    location: { pathname },
  } = history;
  const [scrolled, setScrolled] = useState(false);
  const [hamburger, sethamburger] = useState(false);

  useEffect(
    (_) => {
      document.body.style.overflow = !hamburger && "scroll";

      const handleScroll = (_) => {
        if (window.pageYOffset > 1) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return (_) => {
        document.body.style.overflow = "hidden";
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [hamburger]
  );

  return (
    <div className="Home">
      <AnimatePresence initial={false}>
        {hamburger && (
          <Hamburger
            history={history}
            hamburger={hamburger}
            handleBurger={sethamburger}
            route={pathname}
          />
        )}
      </AnimatePresence>
      {
        <Nav
          scroll={scrolled}
          hamburger={() => {
            sethamburger(true);
          }}
        />
      }
      <main>
        <div className="headers" style={{ marginTop: scrolled ? "10rem" : "" }}>
          <div className="title">Trending</div>
          <div className="more">MORE</div>
        </div>

        <FundCards history={history} hero={hero} />
        <FundCards history={history} hero={hero} />
      </main>
      <Button
        onClick={() => history.push("/new-campaign")}
        position="fixed"
        bottom="1rem"
        width="60%"
        right="1rem"
      >
        <div className="start-button">Start Campaign</div>
      </Button>
    </div>
  );
};

export default Home;
