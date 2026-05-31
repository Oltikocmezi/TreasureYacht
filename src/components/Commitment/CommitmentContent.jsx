import React from "react";
import Beach from "../../assets/img/Videos/CommitmentVideo.mp4";
import "../Functions/Scroll";
import Button from "../ui/Button";
import bodyBg from "../../assets/img/Body/body-bg.webp";
import commitmentBody from "../../assets/img/CommitmentBody.avif";

const CommitmentContentArray = [
  {
    title1: "EVOLVING TODAY, FOR TOMORROW",
    text1: `As a leader in the field of nautical innovation, Treasure Yacht has
    always been committed to the creation of an ambitious and
    sustainable-oriented company culture.`,
    text2: `A bold and avant-garde stance that has allowed it to grow and evolve
    constantly, embracing the challenge of a future nurtured by an
    eco-conscious approach to boat construction and human well-being`,
  },
];

const CommitmentContent = ({ btn }) => {
  return (
    <section className="w-full ty-page-bg">
      <div className="relative min-h-[50vh] w-full overflow-hidden">
        <video
          src={Beach}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="ty-overlay-dark" />
        <div className="relative z-10 p-8 sm:p-12">
          <Button to="/Home" variant="outline" size="sm" className="mb-8">
            {btn}
          </Button>
          <p className="ty-eyebrow text-club-gold">Sustainability</p>
          <h1 className="mt-4 max-w-4xl font-playfair text-4xl font-bold italic text-white sm:text-6xl lg:text-7xl">
            {CommitmentContentArray[0].title1}
          </h1>
        </div>
      </div>

      <div
        className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8"
        style={{ backgroundImage: `url(${bodyBg})`, backgroundSize: "cover" }}
      >
        <div className="ty-card p-8 reveal">
          <p className="text-lg leading-relaxed text-ink/80">
            {CommitmentContentArray[0].text1}
          </p>
        </div>
        <div
          className="reveal min-h-[320px] rounded-2xl bg-cover bg-center shadow-lg lg:min-h-0"
          style={{ backgroundImage: `url(${commitmentBody})` }}
        />
        <div className="ty-card p-8 reveal lg:col-span-2">
          <p className="text-lg leading-relaxed text-ink/80">
            {CommitmentContentArray[0].text2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CommitmentContent;
