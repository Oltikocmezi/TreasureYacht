import React from "react";
import { MdVerified } from "react-icons/md";
import { MdDirectionsBoatFilled } from "react-icons/md";
import { IoFishOutline } from "react-icons/io5";

const AboutContent = [
  {
    icon1: <MdVerified />,
    icon2: <MdDirectionsBoatFilled />,
    icon3: <IoFishOutline />,
  },
  {
    title1: "We are Treasure Yacht Group!",
    text1: `We bring joy,easy access, 
    wonderful interactions 
    and a lot more.`,
  },
];

const About = (props) => {
  const { BackHome } = props;
  return (
    <section className="About">
      <h1 className="title">
        {AboutContent[0].icon1} {} {AboutContent[1].title1}
      </h1>
      <p className="Quote">
        {AboutContent[0].icon2} {AboutContent[1].text1}
      </p>
      <a href="/home" className="BackHome">
        {BackHome}
      </a>
    </section>
  );
};

export default About;
