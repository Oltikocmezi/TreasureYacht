import React from "react";
import "../Functions/Scroll";
import TreasureYachtOcean from "../../assets/img/Videos/TreasureYachtOcean.mp4";

function Ocean({ h1 }) {
  return (
    <div className="relative flex min-h-[80vh] w-full items-center justify-center">
      <video
        src={TreasureYachtOcean}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="ty-overlay-dark" />
      <div className="reveal relative z-10 px-6 text-center">
        <p className="ty-eyebrow text-club-gold">Experience</p>
        <h1 className="mt-4 font-dancing text-5xl text-white sm:text-7xl lg:text-8xl">{h1}</h1>
      </div>
    </div>
  );
}

export default Ocean;
