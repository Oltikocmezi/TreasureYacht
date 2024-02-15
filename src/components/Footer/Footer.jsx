import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { ImYoutube } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import "./footer.css";

const FooterContent = [
  {
    title1: "CONTINUE TO GO BEYOND, WITH US",
    text1: ".Copyright &copy; 2023 by Treasure yacht's. All rights reserved.",
  },
];

const Footer = () => {
  return (
    <footer id="footer">
      <div className="inside-footer">
        <div className="footerChild">
          <h1 className="footerText">{FooterContent[0].title1}</h1>
        </div>
        <div className="icons">
          <FaInstagramSquare className="insta" />
          <IoLogoFacebook className="facebook" />
          <ImYoutube className="youtube" />
          <BsLinkedin className="linkedin" />
        </div>
      </div>
      <div class="copyright">
        <p>{FooterContent[0].text1}</p>
      </div>
    </footer>
  );
};

export default Footer;
