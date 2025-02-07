import React, { useState } from "react";
import "./header.css";
import NavBar from "../NavBar/NavBar";
import logo from "../../assets/img/Icons/icons8-ship-wheel-101.png";

const HeaderContent = [
  {
    title1: "FREEDOM TO EXPLORE",
    text1: `For new adventures, explore Treasure Yacht Group and, find what
    you need or think is best for you.`,
  },
];

const Header = (props) => {
  const { FindOutButton } = props;
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="nav-header-div">
        <img src={logo} alt="logo" className="logo" />
        <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        {isMenuOpen ? null : (
          <div className="box-div">
            <h1 className="p-header">{HeaderContent[0].title1}</h1>
            <p className="p2-header">{HeaderContent[0].text1}</p>
            <a href="#Body" className="link_wrapper">
              {FindOutButton}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
