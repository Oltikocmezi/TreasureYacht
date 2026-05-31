import React from "react";
import Button from "../ui/Button";
import logo from "../../assets/img/Icons/icons8-ship-wheel-101.png";
import headerBg from "../../assets/img/Body/Header2.jpg";

const HeaderContent = [
  {
    title1: "FREEDOM TO EXPLORE",
    text1: `For new adventures, explore Treasure Yacht Group and find what 
    you need or think is best for you.`,
  },
];

const Header = ({ FindOutButton }) => {
  return (
    <div
      className="relative min-h-[85vh] w-full bg-cover bg-center bg-no-repeat lg:min-h-screen"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <div className="ty-overlay-dark" />

      <div className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center px-8 text-center lg:min-h-screen lg:items-start lg:px-16 lg:text-left">
        <img
          src={logo}
          alt="Treasure Yacht logo"
          className="mb-8 h-24 w-24 rounded-full border-2 border-club-gold/50 bg-white/10 p-2 shadow-xl"
        />

        <p className="ty-eyebrow text-club-gold">Welcome aboard</p>
        <h1 className="mt-3 max-w-2xl font-playfair text-4xl font-bold italic text-white sm:text-5xl lg:text-6xl">
          {HeaderContent[0].title1}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
          {HeaderContent[0].text1}
        </p>
        <Button href="#Body" variant="primary" size="lg" className="mt-10 min-w-[220px]">
          {FindOutButton}
        </Button>
      </div>
    </div>
  );
};

export default Header;
