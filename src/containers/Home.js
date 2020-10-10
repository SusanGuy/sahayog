import React, { useState, useEffect, useRef } from "react";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import * as Icons from "react-feather";
import Button from "../components/Button";
import { motion, AnimatePresence } from "framer-motion";
import { withRouter } from "react-router-dom";
import { ContentLoaderHome } from "../components/ContentLoader";

import axios from "../axios";
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

const FundCards = ({ hero }) => (
  <div className="fundcards">
    {hero.map(({ title, image, daysLeft, raised, goal }) => (
      <div key={title} className="fcard">
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

const Home = ({ history, hamburger, hamBurgerIsVisible, setHamBurger }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(
    (_) => {
      document.body.style.overflow = !hamBurgerIsVisible && "scroll";

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
    [hamBurgerIsVisible]
  );
  return (
    <div onClick={() => hamburger && setHamBurger(false)} className="Home">
      <AnimatePresence initial={false}></AnimatePresence>
      {
        <Nav
          scroll={scrolled}
          hamburger={() => {
            setHamBurger(true);
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
      )
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

export default withRouter(Home);
