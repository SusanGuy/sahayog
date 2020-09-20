import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Slider from "../components/Slider";
import * as Icons from "react-feather";
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

const Home = () => {
  const [scrolled, setScrolled] = useState();

  useEffect((_) => {
    document.body.style.overflow = "scroll";
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
  }, []);

  console.log(scrolled);
  return (
    <div className="Home" onScroll={() => {}}>
      <Nav scroll={scrolled} />
      <div className="headers" style={{ marginTop: scrolled ? "10rem" : "" }}>
        <div className="title">Trending</div>
        <div className="more">MORE</div>
      </div>

      <div className="fundcards">
        {hero.map((h) => (
          <div className="fcard">
            <div className="top">
              <img src={h.image} />
              <div className="img-comp">
                <span>{`${h.daysLeft} days left`}</span>
                <div className="bookmark">
                  <Icons.Bookmark />
                </div>
              </div>
            </div>
            <div className="bottom">
              <span className="fundname">{h.title}</span>
              <Slider />
              <div className="raised-text">
                <span>Total Raised</span>
                <span>{`${h.raised} (${Math.floor(
                  (h.raised * 100) / h.goal
                )}%)`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="fundcards">
        {hero.map((h) => (
          <div className="fcard">
            <div className="top">
              <img src={h.image} />
              <div className="img-comp">
                <span>{`${h.daysLeft} days left`}</span>
                <div className="bookmark">
                  <Icons.Bookmark />
                </div>
              </div>
            </div>
            <div className="bottom">
              <span className="fundname">{h.title}</span>
              <Slider />
              <div className="raised-text">
                <span>Total Raised</span>
                <span>{`${h.raised} (${Math.floor(
                  (h.raised * 100) / h.goal
                )}%)`}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
