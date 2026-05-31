import React from "react";
import "../Functions/Scroll";
import Button from "../ui/Button";
import body2 from "../../assets/img/Body/Body2.jpg";

const CommitmentHomeArray = [
  {
    title1: "OUR COMMITMENT",
    text1: "We strive to keep pushing beyond the barriers.",
  },
];

const CommitmentHome = ({ CommitmentBtn }) => {
  return (
    <section
      id="Commitment"
      className="relative flex min-h-screen w-full flex-col justify-end bg-cover bg-center bg-no-repeat p-8 sm:p-12"
      style={{ backgroundImage: `url(${body2})` }}
    >
      <div className="ty-overlay-dark" />
      <div className="relative z-10 max-w-3xl">
        <p className="reveal ty-eyebrow text-club-gold">{CommitmentHomeArray[0].title1}</p>
        <h2 className="reveal ty-heading mt-4 text-3xl leading-tight text-white sm:text-5xl">
          {CommitmentHomeArray[0].text1}
        </h2>
        <Button
          to="/Commitment"
          variant="primary"
          size="md"
          className="reveal mt-8 w-fit"
        >
          {CommitmentBtn}
        </Button>
      </div>
    </section>
  );
};

export default CommitmentHome;
