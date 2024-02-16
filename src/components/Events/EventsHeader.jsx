import React, { useState } from "react";
import "./events.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import EventsVideoHeader from "../../assets/img/Videos/EventsHeader.mp4";
import "../Functions/Scroll";
import NavBar from "../NavBar/NavBar";

const CardsContent = [
  {
    title1: "Having a Party?",
    text1:
      "Our team of designer's arrange some quality event's, like birthdays, meeting's and a lot more.",
  },
  {
    title2: "Addressing an Event?",
    text2:
      "Event's may bring a lot of joy when owning a yacht, like the f1 race you can experience every year on Monaco's port.",
  },
  {
    title3: "Having a meet up?",
    text3:
      "It's a traditional way of saying welcome to new members of the group by linking together to enjoy that new experience.",
  },
];

const EventsHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <section className="EventsSection">
      <div className="EventsNavOverlay"></div>
      <video
        src={EventsVideoHeader}
        autoPlay
        loop
        muted
        className="EventsHeaderVideo"
      ></video>

      <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

      {isMenuOpen ? null : (
        <div className="CardContainer">
          <div className="card1 ">
            <h1>{CardsContent[0].title1}</h1>
            <p>{CardsContent[0].text1}</p>
            <IoIosArrowDropdownCircle className="cardIcon" />{" "}
          </div>
          <div className="card2">
            <h1>{CardsContent[1].title2}</h1>
            <p>{CardsContent[1].text2}</p>
            <IoIosArrowDropdownCircle className="cardIcon" />{" "}
          </div>
          <div className="card3">
            <h1>{CardsContent[2].title3}</h1>
            <p>{CardsContent[2].text3}</p>
            <IoIosArrowDropdownCircle className="cardIcon" />{" "}
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsHeader;
