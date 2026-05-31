import React from "react";
import locationHeader from "../../assets/img/Location/LocationHeader.jpg";

const YachtClubHeader = ({ h1, h3 }) => {
  return (
    <div
      className="relative flex min-h-[70vh] w-full items-center justify-center bg-cover bg-bottom bg-no-repeat px-8"
      style={{ backgroundImage: `url(${locationHeader})` }}
    >
      <div className="ty-overlay-dark" />
      <div className="relative z-10 flex max-w-[700px] flex-col items-center text-center">
        <p className="ty-eyebrow text-club-gold">Members</p>
        <h1 className="mt-4 border-b-2 border-club-gold pb-4 font-dancing text-5xl text-white lg:text-8xl">
          {h1}
        </h1>
        <h2 className="mt-6 border-l-2 border-club-gold pl-6 font-playfair text-xl font-light italic text-white/90 lg:text-3xl">
          {h3}
        </h2>
      </div>
    </div>
  );
};

export default YachtClubHeader;
