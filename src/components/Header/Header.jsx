import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import logo from "../../assets/img/Icons/icons8-ship-wheel-101.png";
import "./header.css";

const HeaderContent = [
  {
    title1: "FREEDOM TO EXPLORE",
    text1: `For new adventures, explore Treasure Yacht Group and find what 
    you need or think is best for you.`,
  },
];

const Header = ({ FindOutButton }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className=" arelative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('../../assets/img/Body/Header2.jpg')" }}
    >
      <div className="nav-header-div flex justify-center w-full h-full">
        <img
          src={logo}
          alt="logo"
          className="relative top-[10px] w-[100px] h-[100px]"
        />
        <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        {!isMenuOpen && (
          <div className="absolute top-[300px] left-[50px] h-fit">
            <h1 className="font-[Playfair] font-bold italic text-white text-[50px] cursor-default">
              {HeaderContent[0].title1}
            </h1>
            <p className="font-[Playfair] font-medium italic text-white text-[20px] absolute top-[70px]">
              {HeaderContent[0].text1}
            </p>
            <a
              href="#Body"
              className="mt-[70px] flex justify-center items-center w-[250px] h-[50px] italic font-bold text-white uppercase text-center bg-[#a2622b9d] rounded-[20px] tracking-[1px] transition-all duration-300 hover:bg-[#a2622b]"
            >
              {FindOutButton}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
