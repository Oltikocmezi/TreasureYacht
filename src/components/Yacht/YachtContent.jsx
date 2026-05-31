import React from "react";
import "../Functions/Scroll";
import bodyBg from "../../assets/img/Body/body-bg.webp";
import ladyLi from "../../assets/img/Body/LadyLi.avif";

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

const textBlockClass =
  "flex h-[60vh] w-full flex-col items-center justify-center bg-cover bg-center";

function YachtContent() {
  return (
    <div>
      <div
        className={textBlockClass}
        style={{ backgroundImage: `url(${bodyBg})` }}
      >
        <h1 className="w-[700px] text-center text-[30px] font-medium tracking-[7px] max-lg:w-[90%]">
          {YachtContentArray[0].title1}
        </h1>
        <p className="relative top-[35px] w-[900px] text-center text-xl font-normal tracking-[2px] max-lg:w-[90%]">
          {YachtContentArray[0].text1}
        </p>
      </div>

      <div
        className="h-[80vh] w-full rounded-tl-[80%] bg-cover bg-center"
        style={{ backgroundImage: `url(${ladyLi})` }}
      />

      <div
        className={textBlockClass}
        style={{ backgroundImage: `url(${bodyBg})` }}
      >
        <h1 className="w-[700px] text-center text-[30px] font-medium tracking-[7px] max-lg:w-[90%]">
          {YachtContentArray[1].title2}
        </h1>
        <p className="relative top-[35px] w-[900px] text-center text-xl font-normal tracking-[2px] max-lg:w-[90%]">
          {YachtContentArray[1].text2}
        </p>
      </div>
    </div>
  );
}

export default YachtContent;
