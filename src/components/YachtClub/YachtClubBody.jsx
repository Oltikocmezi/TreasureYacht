import React from "react";
import "./yachtclub.css";

const YachtClubContent = [
  {
    title1: "ABOUT THE CLUB",
    text1:
      "The mission of our Yacht Club is to promote yachting, competitive sailing and an exceptional social experience.",
  },
  {
    title2: "",
    text2: `Our Club's location, facilities, programs and yachting assets make
    it the first choice for social and recreational enjoyment. Our Yacht
    Club was founded with the main goal of offering our valued clients
    and members an inviting boating environment. We look forward to
    welcoming you at the club and sharing sailing stories.`,
  },
  {
    title3: "MEMBERSHIP",
    text3: `Thank you for considering membership at TYC. New members are always
    welcome! You are encouraged to apply regardless of your sailing
    ability, experience, background, and whether or not you own a boat.
    The joining process is simple and our application form can be
    downloaded below. Please consider one of our two benefit programs.
    For general membership enquiries please contact:
    tyc@TreasureClub.com`,
  },
];

const YachtClubBody = (props) => {
  const { Member } = props;
  return (
    <section id="YachtClub">
      <div className="ClubParent1">
        <div className="ClubChild1">
          <h1 className="Child1H1">{YachtClubContent[0].title1}</h1>
          <h3 className="Child1H3">{YachtClubContent[0].text1}</h3>
        </div>
        <div className="ClubChild2">
          <p className="Child2P">{YachtClubContent[1].text2}</p>
        </div>
      </div>
      <div className="ClubParent2">
        <div className="ClubChild3"></div>
        <div className="ClubChild4">
          <h1 className="Child4H1">{YachtClubContent[2].title3}</h1>
          <p className="Child4P2">{YachtClubContent[2].text3}</p>
          <a className="MemberButton" href="/Membership">
            {Member}
          </a>
        </div>
      </div>
    </section>
  );
};

export default YachtClubBody;
