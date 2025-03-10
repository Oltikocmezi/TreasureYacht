import React from "react";
import "./commitment.css";
import "../Functions/Scroll";
import { Link } from "react-router-dom";

const CommitmentHomeArray = [
  {
    title1: "OUR COMMITMENT",
    text1: "We strive to keep pushing beyond the barriers.",
  },
];

const Commitment = (props) => {
  const { CommitmentBtn } = props;
  return (
    <div id="Commitment">
      <div className="Body1">
        <p className="text reveal">{CommitmentHomeArray[0].title1}</p>
        <h2 className="text2 reveal">{CommitmentHomeArray[0].text1}</h2>
        <Link className="btn1 " to="/Commitment">
          {CommitmentBtn}
        </Link>
      </div>
    </div>
  );
};

export default Commitment;
