import React, { useState, useRef, useEffect, useCallback } from "react";
import * as Icons from "react-feather";
import AuthButton from "./AuthButton";
import { motion } from "framer-motion";
import "./Hamburger.scss";
import { Link } from "react-router-dom";
const menus = {
  HOME: { icon: <Icons.Home />, title: "Home", link: "/" },
  DONATION: {
    icon: <Icons.Plus />,
    title: "My Donations",
    link: "/my-donations",
  },
  CONTRIBUTION: {
    icon: <Icons.Smile />,
    title: "My Fundraisers",
    link: "/my-fundraisers",
  },
  FAVORITE: {
    icon: <Icons.Star />,
    title: "My Favorites",
    link: "/my-favorites",
  },

  PROFILE: {
    icon: <Icons.Headphones />,
    title: "My Profile",
    link: "/my-profile",
  },
};
const Hamburger = ({ hamburger, handleBurger, route }) => {
  const [active, setactive] = useState(route);
  // const node = useRef();
  // const handleClick = useCallback(
  //   (e) => {
  //     if (!node.current.contains(e.target)) {
  //       handleBurger(false);
  //     }
  //   },
  //   [handleBurger]
  // );
  // useEffect(
  //   (_) => {
  //     window.addEventListener("click", handleClick);
  //     return () => {
  //       document.removeEventListener("click", handleClick);
  //     };
  //   },
  //   [handleClick]
  // );

  return (
    <motion.div
      animate={{ x: 0 }}
      initial={{ x: -100 }}
      exit={{ x: -100 }}
      className="hamburger-container"
    >
      <div className="hamburger-menu">
        <div
          className="hamburger-cross"
          onClick={() => {
            handleBurger(false);
          }}
        >
          <Icons.X />
        </div>
        <motion.div
          initial={{ y: -100 }}
          exit={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 0.4 }}
          className="hamburger-top"
        >
          <div className="img-wrapper">
            <img src="https://www.unh.edu/unhtoday/sites/default/files/styles/article_huge/public/article/2019/professional_woman_headshot.jpg?itok=3itzxHXh" />
          </div>
          <span>Sushant Baskota</span>
        </motion.div>
        <motion.div
          initial={{ y: -200 }}
          exit={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
          className="hamburger-items"
        >
          {Object.keys(menus).map((key) => {
            const { title, icon, link } = menus[key];
            return (
              <div
                key={link}
                onClick={() => {
                  handleBurger(false);
                  setactive(link);
                }}
                className={`hamburger-item ${active === link ? "active" : ""}`}
              >
                <Link to={link}>
                  {icon}
                  <span>{title}</span>
                </Link>
              </div>
            );
          })}
          <div className="authentication-status">
            <AuthButton>Log Out</AuthButton>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hamburger;
