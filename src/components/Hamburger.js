import React, { useState } from "react";
import * as Icons from "react-feather";
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
  LOGOUT: { icon: <Icons.Power />, title: "Log Out", link: "/logout" },
};
const Hamburger = ({ hamburger, handleBurger, route = menus.HOME.title }) => {
  const [active, setactive] = useState(route);
  return (
    <div
      className="hamburger-menu"
      style={hamburger ? {} : { transform: "translateX(-125%)" }}
    >
      <div
        className="hamburger-cross"
        onClick={() => {
          handleBurger(!hamburger);
        }}
      >
        <Icons.X />
      </div>
      <div className="hamburger-top">
        <div className="img-wrapper">
          <img src="https://www.unh.edu/unhtoday/sites/default/files/styles/article_huge/public/article/2019/professional_woman_headshot.jpg?itok=3itzxHXh" />
        </div>
        <span>Sushant Baskota</span>
      </div>
      <div className="hamburger-items">
        {Object.keys(menus).map((key) => {
          const { title, icon, link } = menus[key];
          return (
            <div
              key={link}
              onClick={() => {
                handleBurger(false);
                setactive(title);
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
      </div>
    </div>
  );
};

export default Hamburger;
