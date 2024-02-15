import React from "react";
import "./yacht.css";
import "../Functions/Scroll";

const YachtContentArray = [
  {
    title1: "DESIGNED TO OPEN UP NEW HORIZONS",
    text1: `Lady Li, a majestic 90-foot bluewater sailing yacht, stands as a
    testament to remarkable design and engineering. Crafted for
    uncompromising performance, she gracefully combines the thrill of
    sailing with the epitome of luxury. With the capability to
    effortlessly navigate the world's waters, Lady Li redefines the art of
    global travel, ensuring every journey is a harmonious blend of
    opulence and style.`,
  },
  {
    title2: "LUXURY, SPACE AND PRIVACY YOU WILL LOVE",
    text2: `Lady Li, a vessel of unmatched maritime grandeur, evokes a profound
    sense of awe as she glides gracefully across the waves. With a regal
    length of 90 feet, she becomes a floating sanctuary where opulence and
    performance dance in perfect harmony. Step aboard to discover a world
    where the art of sailing meets the pinnacle of refined living.
    Luxurious spaces, meticulously designed for both seafaring enthusiasts
    and connoisseurs of unparalleled entertainment, beckon you to indulge
    in an extraordinary maritime experience. Lady Li's interior, a
    masterful composition of elegance, offers bespoke layouts, inviting
    guests into a cocoon of tailored luxury. Embark on a journey that
    transcends the ordinary and immerse yourself in the emotional tapestry
    woven by Lady Li, where each moment unfurls with the poetry of
    adventure and timeless sophistication.`,
  },
];

function YachtContent() {
  return (
    <div>
      <div className="YachtDiv">
        <h1>{YachtContentArray[0].title1}</h1>
        <p>{YachtContentArray[0].text1}</p>
      </div>
      <div className="YachtContent "></div>
      <div className="YachtDiv">
        <h1>{YachtContentArray[1].title2}</h1>
        <p>{YachtContentArray[1].text2}</p>
      </div>
    </div>
  );
}

export default YachtContent;
