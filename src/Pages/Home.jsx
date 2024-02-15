import React from "react";
import Header from "../components/Header/Header";
import Body from "../components/Body/Body";
import HomeSlider from "../components/HomeSlider/HomeSlider";
import Footer from "../components/Footer/Footer";
import Ocean from "../components/Ocean/Ocean";
import CommitmentHome from "../components/Commitment/CommitmentHome";

const Home = () => {
  return (
    <div>
      <Header FindOutButton="Find out more ..." />
      <Body YachtBtn="Explore" EventsBtn="Explore" YachtClubBtn="Explore" />
      <CommitmentHome CommitmentBtn="Find out more →" />
      <HomeSlider TresureYacht="--Treasure Yacht--" />
      <Ocean h1="Treasure Yacht's" ExploreButton="Explore Map" />
      <Footer />
    </div>
  );
};

export default Home;
