import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { ImYoutube } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";

const FooterContent = [
  {
    title1: "CONTINUE TO GO BEYOND, WITH US",
    text1: "Copyright © 2023 by Treasure Yacht's. All rights reserved.",
  },
];

const Footer = () => {
  return (
    <footer className="flex flex-col w-full h-[50vh] bg-gray-300/30 overflow-hidden">
      <div className="w-full h-full flex flex-row border-b-2 border-[#2e2d2c]">
        <div className="w-1/2 h-full flex border ">
          <h1 className="relative w-full h-full flex justify-center items-center sm:text-[20px] md:text-[50px] text-center font-light text-[#2e2d2c]">
            {FooterContent[0].title1}
          </h1>
        </div>
        <div className="flex flex-wrap text-center w-1/2 h-full items-center justify-evenly ">
          <FaInstagramSquare className="sm:w-[30px] md:w-[60px] h-[60px] cursor-pointer" />
          <IoLogoFacebook className="sm:w-[30px] md:w-[60px] h-[60px] cursor-pointer" />
          <ImYoutube className="sm:w-[30px] md:w-[60px] h-[60px] cursor-pointer" />
          <BsLinkedin className="sm:w-[30px] md:w-[60px] h-[60px] cursor-pointer" />
        </div>
      </div>
      <div className="relative pt-[120px] min-w-[500px] h-[20vh] text-center text-[#2e2d2c] text-[20px]">
        <p>{FooterContent[0].text1}</p>
      </div>
    </footer>
  );
};

export default Footer;
