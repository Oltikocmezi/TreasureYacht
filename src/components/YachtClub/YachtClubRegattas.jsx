import React from "react";
import "./yachtclub.css";

const RegattasContent = [
  {
    title1: "REGATTAS",
    text1:
      "Regattas are a fabulous way to test your racing skills as well as the ability of your boat and crew. Not only are regattas great fun on the water, they also include many shore-side activities after racing. At our Treasure Yacht Club, we take great pride in running successful regattas. With high expectations we are optimistic about hosting events in 2022, including our signature Treasure regatta “Boka Islands” and we hope that it will give us the chance to connect with you.",
  },
];

const YachtClubRegattas = () => {
  return (
    <section className="Regattas">
      <div className="RegattasChild1">
        <h1 className="RegattasH1">{RegattasContent[0].title1}</h1>
        <p className="RegattasP">{RegattasContent[0].text1}</p>
      </div>
      <div className="ReggatasChild2"></div>
    </section>
  );
};

export default YachtClubRegattas;
