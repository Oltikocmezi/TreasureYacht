import React, { useState } from "react";
import "../NavBar/navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "../Functions/Scroll";

const MenuItems = [
  {
    title: "Home",
    url: "/Home",
    cName: "links ",
  },
  {
    title: "Yachts",
    url: "/Yacht",
    cName: "links",
  },
  {
    title: "Events",
    url: "/Events",
    cName: "links",
  },
  {
    title: "Yacht Club",
    url: "/YachtClub",
    cName: "links",
  },
];

const NavBar = ({ isMenuOpen, toggleMenu }) => {
  const [Mobile, setMobile] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <ul
          className={Mobile || isMenuOpen ? "nav-links-mobile " : "nav-links "}
          onClick={() => setMobile(true)}
        >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a
                  className={item.cName}
                  href={item.url}
                  onClick={() => {
                    setMobile(false);
                    toggleMenu();
                  }}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => {
            setMobile(!Mobile);
            toggleMenu();
          }}
          className="mobile-menu-icon"
        >
          {Mobile ? <ImCross className="cross" /> : <FaBars className="bars" />}
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
