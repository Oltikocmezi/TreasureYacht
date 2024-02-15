import { useRef, useEffect, useState } from "react";
import "../HomeSlider/homeSlider.css";
import { motion } from "framer-motion";
import Images from "./Images";
import "../Functions/Scroll";

const HomeSliderContent = [
  {
    text1: `Aboard every yacht, innovative concepts will reveal their unexpected
    soul, offering you and your guests a practically perfect lifestyle
    experience.`,
  },
];

const HomeSlider = (props) => {
  const { TresureYacht } = props;

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  console.log(Images);
  return (
    <div className="Content">
      <div className="Content1 reveal">
        <h1>{HomeSliderContent[0].text1}</h1>
      </div>

      <div className="Content2">
        <motion.div ref={carousel} className="carousel">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {Images.map((image) => {
              return (
                <motion.div className="item" key={image}>
                  <img src={image} alt="" />
                  <p className="TreasureYacht">{TresureYacht}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeSlider;
