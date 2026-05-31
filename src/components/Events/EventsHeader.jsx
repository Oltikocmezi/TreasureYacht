import React from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import EventsVideoHeader from "../../assets/img/Videos/EventsHeader.mp4";
import "../Functions/Scroll";

const cards = [
  {
    title: "Having a Party?",
    text: "Our team arranges quality events — birthdays, meetings, and much more.",
  },
  {
    title: "Addressing an Event?",
    text: "Events bring joy when owning a yacht, like the F1 race in Monaco every year.",
  },
  {
    title: "Having a meet up?",
    text: "Welcome new members by linking together to enjoy that new experience.",
  },
];

const EventsHeader = () => {
  return (
    <section className="relative min-h-screen w-full">
      <video
        src={EventsVideoHeader}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="ty-overlay-dark" />

      <div className="relative z-10 flex min-h-screen flex-col justify-end px-4 pb-12 pt-24">
        <div className="mx-auto mb-8 w-full max-w-6xl">
          <p className="ty-eyebrow text-club-gold">Events</p>
          <h1 className="ty-heading mt-2 text-4xl text-white sm:text-5xl">Unforgettable moments</h1>
        </div>

        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-stretch justify-center gap-6">
          {cards.map(({ title, text }) => (
            <div
              key={title}
              className="ty-card-dark flex min-h-[280px] w-full max-w-[400px] flex-col items-center rounded-2xl p-8 text-center sm:min-h-[320px]"
            >
              <h2 className="font-playfair text-2xl font-light italic text-white">{title}</h2>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/75">{text}</p>
              <IoIosArrowDropdownCircle className="mt-4 h-12 w-12 text-club-gold" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsHeader;
