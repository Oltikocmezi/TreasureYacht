import React from "react";
import "./ocean.css";
import "../Functions/Scroll";
import TreasureYachtOcean from "../../assets/img/Videos/TreasureYachtOcean.mp4";

function Ocean(props) {
  const { h1 } = props;
  return (
    <div className="ocean">
      <video
        src={TreasureYachtOcean}
        autoPlay
        loop
        muted
        className="TreasureYachtOcean"
      />
      <div className="ocean-container reveal">
        <h1>{h1}</h1>
      </div>
    </div>
  );
}

export default Ocean;
