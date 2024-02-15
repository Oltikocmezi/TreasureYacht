import React from "react";
import "./ocean.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../Functions/Scroll";

function Ocean(props) {
  const { h1 } = props;
  const { ExploreButton } = props;
  return (
    <div className="ocean">
      <div className="ocean-container reveal">
        <h1>{h1}</h1>
        <a href="/">
          {ExploreButton}
          <AiOutlineArrowRight className="Arrow-right" />
        </a>
      </div>
    </div>
  );
}

export default Ocean;
