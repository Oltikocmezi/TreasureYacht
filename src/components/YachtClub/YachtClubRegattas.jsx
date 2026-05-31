import React from "react";
import regattasImg from "../../assets/img/Location/Reagattas.jpg";

const RegattasContent = [
  {
    title1: "REGATTAS",
    text1:
      "Regattas are a fabulous way to test your racing skills as well as the ability of your boat and crew. Not only are regattas great fun on the water, they also include many shore-side activities after racing. At our Treasure Yacht Club, we take great pride in running successful regattas. With high expectations we are optimistic about hosting events in 2022, including our signature Treasure regatta “Boka Islands” and we hope that it will give us the chance to connect with you.",
  },
];

const YachtClubRegattas = () => {
  return (
    <section className="flex h-[90vh] w-full flex-row items-center justify-center max-lg:h-auto max-lg:flex-col max-lg:py-10">
      <div className="flex h-full w-[40%] flex-col items-center justify-center max-lg:w-full max-lg:px-6">
        <h1 className="relative left-[70px] self-start font-sans text-[60px] font-extralight text-navy max-lg:left-0 max-lg:text-4xl">
          {RegattasContent[0].title1}
        </h1>
        <p className="relative top-5 w-[600px] max-w-[90vw] border-l-2 border-navy pl-2.5 text-start text-[1.1rem] font-medium leading-[144.5%] text-[#414141]">
          {RegattasContent[0].text1}
        </p>
      </div>
      <div
        className="ml-[50px] h-[70%] w-[60%] bg-cover bg-center bg-no-repeat max-lg:ml-0 max-lg:mt-8 max-lg:h-[40vh] max-lg:w-full"
        style={{ backgroundImage: `url(${regattasImg})` }}
      />
    </section>
  );
};

export default YachtClubRegattas;
