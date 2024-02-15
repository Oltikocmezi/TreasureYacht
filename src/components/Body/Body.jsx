import React from "react";
import "./body.css";
import "../Functions/Scroll";

const bodyContent = [
  {
    title: " THE LATEST FROM OUR WORLD ",
    title1: "Yacht's",
    title2: "Events",
    title3: "Yacht Club",
  },
  {
    text1: `Explore more of what we have to offer, different designs, forms
    and a variety of sizes for our yacht's.`,
    text2: `It's not living your best life, without having that amazing party
    on your masterpice yacht.`,
    text3: "Join our Yacht Club, and enjoy what we have to offer.",
  },
];

const Body = (props) => {
  const { YachtBtn } = props;
  const { EventsBtn } = props;
  const { YachtClubBtn } = props;
  return (
    <div id="Body">
      <div className="body-line reveal">{bodyContent[0].title}</div>
      <div className="parent-div1 reveal">
        <div className="box1 reveal">
          <div className="box1-content reveal">
            <h1 className="box-h1">{bodyContent[0].title1}</h1>
            <p className="box-p">{bodyContent[1].text1}</p>
            <a className="link-body" href="/Yacht">
              {YachtBtn}
            </a>
          </div>
        </div>

        <div className="box2 reveal">
          <div className="box1-content reveal">
            <h1 className="box-h1">{bodyContent[0].title2}</h1>
            <p className="box-p">{bodyContent[1].text2}</p>
            <a className="link-body" href="/Events">
              {EventsBtn}
            </a>
          </div>
        </div>

        <div className="box3 reveal">
          <div className="box1-content reveal">
            <h1 className="box-h1">{bodyContent[0].title3}</h1>
            <p className="box-p">{bodyContent[1].text3}</p>
            <a className="link-body" href="/YachtClub">
              {YachtClubBtn}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
