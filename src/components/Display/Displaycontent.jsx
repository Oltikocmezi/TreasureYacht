import React from "react";
import { TbSpeedboat } from "react-icons/tb";
import Boat from "../../assets/img/Videos/Boat.mp4";

const Displaycontent = (props) => {
  const { button } = props;
  const { title } = props;
  const { title2 } = props;
  return (
    <section id="Home">
      <div className="overlay"></div>

      <video src={Boat} autoPlay loop muted className="boat" />
      <div className="display-container">
        <h1>{title}</h1>
        <p>{title2}</p>
        <a href="/Home">
          {" "}
          {button} <TbSpeedboat className="Speed-boat" />{" "}
        </a>
      </div>
    </section>
  );
};

export default Displaycontent;
