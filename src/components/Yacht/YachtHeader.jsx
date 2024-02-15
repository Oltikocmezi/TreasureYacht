import React, { useState } from "react";
import "./yacht.css";
import YachtHeader2 from "../../assets/img/Videos/YachtHeader2.mp4";
import NavBar from "../NavBar/NavBar";

const YachtHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <section className="backgroundVideo">
        <>
          <div className="YachtNavOverlay"></div>
          <video
            src={YachtHeader2}
            autoPlay
            loop
            muted
            className="YachtHeader"
          />
          <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </>
      </section>
    </div>
  );
};

export default YachtHeader;
