import React, { useState } from "react";
import "./yachtclub.css";
import NavBar from "../NavBar/NavBar";

const YachtClubHeader = (props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { h1 } = props;
  const { h3 } = props;

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="YachtClub-Header">
      <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {isMenuOpen ? null : (
        <div className="info-container">
          <h1>{h1}</h1>
          <h3>{h3}</h3>
        </div>
      )}
    </div>
  );
};

export default YachtClubHeader;
