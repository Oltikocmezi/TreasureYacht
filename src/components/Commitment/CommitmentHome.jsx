import React from "react";
import "./commitment.css";
import "../Functions/Scroll";

const CommitmentHomeArray = [
  {
    title1: "OUR COMMITMENT",
    text1: "We strive to keep pushing beyond the barriers.",
  },
];

const Commitment = (props) => {
  const { CommitmentBtn } = props;
  return (
    <div className="Body1">
      <p className="text reveal">{CommitmentHomeArray[0].title1}</p>
      <h2 className="text2 reveal">{CommitmentHomeArray[0].text1}</h2>
      <a className="btn1 " href="/Commitment">
        {CommitmentBtn}
      </a>
    </div>
  );
};

export default Commitment;
