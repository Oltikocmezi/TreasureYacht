import React from "react";
import YachtHeader2 from "../../assets/img/Videos/YachtHeader2.mp4";

const YachtHeader = () => {
  return (
    <section className="relative h-[60vh] w-full min-h-[400px]">
      <video
        src={YachtHeader2}
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      />
      <div className="ty-overlay-dark" />
      <div className="absolute inset-0 z-10 flex items-end p-8 lg:p-12">
        <div>
          <p className="ty-eyebrow text-club-gold">Our fleet</p>
          <h1 className="ty-heading mt-2 text-4xl text-white lg:text-5xl">Luxury yachts</h1>
        </div>
      </div>
    </section>
  );
};

export default YachtHeader;
