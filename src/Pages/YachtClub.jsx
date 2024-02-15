import React from "react";
import YachtClubHeader from "../components/YachtClub/YachtClubHeader";
import YachtClubBody from "../components/YachtClub/YachtClubBody";
import YachtClubRegattas from "../components/YachtClub/YachtClubRegattas";
import Footer from "../components/Footer/Footer";

const YachtClub = () => {
  return (
    <div>
      <YachtClubHeader h1="Yacht Club" h3="Welcome to our Yacht's club" />
      <YachtClubBody Member="BECOME A MEMBER" />
      <YachtClubRegattas />
      <Footer />
    </div>
  );
};

export default YachtClub;
