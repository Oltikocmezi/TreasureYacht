import React from "react";
import "../Functions/Scroll";
import Button from "../ui/Button";
import bodyBg from "../../assets/img/Body/body-bg.webp";
import ladyLi from "../../assets/img/Body/LadyLi.avif";
import bollinger from "../../assets/img/Body/bollinger.jpg";
import header1 from "../../assets/img/Header1.jpg";

const bodyContent = [
  {
    title: "The latest from our world",
    title1: "Yachts",
    title2: "Events",
    title3: "Yacht Club",
  },
  {
    text1: `Explore more of what we have to offer, different designs, forms
    and a variety of sizes for our yachts.`,
    text2: `It's not living your best life, without having that amazing party
    on your masterpiece yacht.`,
    text3: "Join our Yacht Club, and enjoy what we have to offer.",
  },
];

const Body = ({ YachtBtn, EventsBtn, YachtClubBtn }) => {
  const cards = [
    { img: ladyLi, title: bodyContent[0].title1, text: bodyContent[1].text1, to: "/Yacht", btn: YachtBtn },
    { img: bollinger, title: bodyContent[0].title2, text: bodyContent[1].text2, to: "/Events", btn: EventsBtn },
    { img: header1, title: bodyContent[0].title3, text: bodyContent[1].text3, to: "/YachtClub", btn: YachtClubBtn },
  ];

  return (
    <section
      id="Body"
      className="relative w-full bg-cover bg-center py-16"
      style={{ backgroundImage: `url(${bodyBg})` }}
    >
      <div className="mx-auto w-[90%] max-w-6xl">
        <p className="ty-eyebrow reveal">Discover</p>
        <h2 className="ty-heading reveal mt-2 text-3xl sm:text-4xl">{bodyContent[0].title}</h2>
        <div className="reveal mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-treasure to-club-gold" />
      </div>

      <div className="mx-auto mt-12 flex w-[90%] max-w-6xl flex-col gap-10">
        {cards.map(({ img, title, text, to, btn }) => (
          <article
            key={to}
            className="reveal group relative min-h-[420px] overflow-hidden rounded-3xl shadow-[0_20px_60px_-20px_rgba(0,33,77,0.35)] sm:min-h-[500px]"
          >
            <div
              className="absolute inset-0 scale-100 bg-cover bg-center transition duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${img})` }}
            />
            <div className="ty-overlay-dark" />
            <div className="relative flex min-h-[420px] flex-col justify-end p-8 sm:min-h-[500px] sm:p-12">
              <p className="ty-eyebrow text-club-gold">{title}</p>
              <p className="mt-3 max-w-xl font-playfair text-2xl font-medium italic leading-snug text-white sm:text-3xl">
                {text}
              </p>
              <Button to={to} variant="primary" size="md" className="mt-8 w-fit">
                {btn}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Body;
