import React, { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import membershipImg from "../../assets/img/Location/Membership.jpg";

const YachtClubBody = memo(({ Member }) => {
  const yachtClubContent = useMemo(
    () => [
      {
        title: "ABOUT THE CLUB",
        text: "The mission of our Yacht Club is to promote yachting, competitive sailing and an exceptional social experience.",
      },
      {
        title: "",
        text: `Our Club's location, facilities, programs and yachting assets make
      it the first choice for social and recreational enjoyment. Our Yacht
      Club was founded with the main goal of offering our valued clients
      and members an inviting boating environment. We look forward to
      welcoming you at the club and sharing sailing stories.`,
      },
      {
        title: "MEMBERSHIP",
        text: `Thank you for considering membership at TYC. New members are always
      welcome! You are encouraged to apply regardless of your sailing
      ability, experience, background, and whether or not you own a boat.
      The joining process is simple and our application form can be
      downloaded below. Please consider one of our two benefit programs.
      For general membership enquiries please contact:
      tyc@TreasureClub.com`,
      },
    ],
    []
  );

  return (
    <section id="YachtClub" className="flex h-screen w-full flex-col">
      <div className="flex h-[40vh] w-full flex-row items-center justify-center max-lg:h-auto max-lg:flex-col">
        <div className="h-full w-1/2 bg-club-gold max-lg:h-auto max-lg:w-full max-lg:py-10">
          <h1 className="relative left-[50px] top-[50px] font-sans text-[60px] font-extralight text-navy max-lg:left-6 max-lg:top-0 max-lg:text-4xl">
            {yachtClubContent[0].title}
          </h1>
          <h3 className="relative left-[50px] top-[70px] w-[800px] max-w-[90vw] border-l-2 border-navy pl-2.5 font-dancing text-[40px] font-extralight text-white max-lg:left-6 max-lg:top-4 max-lg:text-2xl">
            {yachtClubContent[0].text}
          </h3>
        </div>
        <div className="flex h-full w-1/2 items-center justify-center max-lg:h-auto max-lg:w-full max-lg:px-6 max-lg:py-8">
          <p className="relative w-[90%] border-l-2 border-navy pl-2.5 text-start text-[1.1rem] font-medium leading-[144.5%] text-[#414141]">
            {yachtClubContent[1].text}
          </p>
        </div>
      </div>

      <div className="flex h-[60vh] w-full flex-row items-center justify-center max-lg:h-auto max-lg:flex-col">
        <div
          className="h-full w-[60%] bg-cover bg-center bg-no-repeat max-lg:h-[40vh] max-lg:w-full"
          style={{ backgroundImage: `url(${membershipImg})` }}
        />
        <div className="flex h-full w-[40%] flex-col items-center justify-center max-lg:w-full max-lg:px-6 max-lg:py-10">
          <h1 className="relative left-[50px] font-sans text-[60px] font-extralight text-navy max-lg:left-0 max-lg:text-4xl">
            {yachtClubContent[2].title}
          </h1>
          <p className="relative left-[50px] top-5 w-[70%] border-l-2 border-navy pl-2.5 text-start text-[1.1rem] font-medium leading-[144.5%] text-[#414141] max-lg:left-0 max-lg:w-full">
            {yachtClubContent[2].text}
          </p>
          <Link
            className="relative top-[50px] flex h-[50px] w-[210px] items-center justify-center border-2 border-navy bg-navy p-[15px] text-[0.9rem] font-extralight tracking-wide text-white no-underline transition-all duration-700 hover:border-navy hover:bg-white hover:text-navy"
            to="/Home"
          >
            {Member}
          </Link>
        </div>
      </div>
    </section>
  );
});

export default YachtClubBody;
