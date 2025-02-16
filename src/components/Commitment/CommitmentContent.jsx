import React from "react";
import Beach from "../../assets/img/Videos/CommitmentVideo.mp4";
import "./commitment.css";
import "../Functions/Scroll";

const CommitmentContentArray = [
  {
    title1: "EVOLVING TODAY, FOR TOMORROW",
  },
  {
    text1: `As a leader in the field of nautical innovation, Treasure Yacht has
    always been committed to the creation of an ambitious and
    sustainable-oriented company culture.`,

    text2: `A bold and avant-garde stance that has allowed it to grow and evolve
    constantly, embracing the challenge of a future nurtured by an
    eco-conscious approach to boat construction and human well-being`,
  },
];

const CommitmentContent = (props) => {
  const { btn } = props;
  return (
    <section className="Commitment-sec">
      <div className="Commitment-div">
        <a className="Commitment-btn" href="/Home">
          {btn}
        </a>
        <h1 className="Commitment-h1">{CommitmentContentArray[0].title1}</h1>
      </div>
      <div className="Commitment-img"></div>
      <div className="Commitment-info">
        <h1 className="CommitmentH1 reveal">
          {CommitmentContentArray[1].text1}
        </h1>

        <div className="CommitmentVideo">
          <video src={Beach} autoPlay loop muted />
        </div>
        <h1 className="CommitmentH2 reveal">
          {CommitmentContentArray[1].text2}
        </h1>
      </div>
    </section>
  );
};

export default CommitmentContent;
