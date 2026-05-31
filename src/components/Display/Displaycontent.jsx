import React from "react";
import { TbSpeedboat } from "react-icons/tb";
import Boat from "../../assets/img/Videos/Boat.mp4";
import Button from "../ui/Button";

const Displaycontent = ({ button, title, title2 }) => {
  return (
    <section id="Home" className="relative flex h-screen w-full justify-center">
      <video
        src={Boat}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="ty-overlay-dark" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <p className="font-ysabeau text-xs uppercase tracking-[0.35em] text-club-gold">
          Luxury at sea
        </p>
        <h1 className="mt-4 font-dancing text-6xl text-white sm:text-7xl md:text-8xl">{title}</h1>
        <p className="mt-2 font-dancing text-4xl text-white/90 sm:text-5xl">{title2}</p>
        <Button to="/Home" variant="primary" size="lg" className="mt-12 min-w-[240px] gap-3">
          {button}
          <TbSpeedboat className="h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Displaycontent;
