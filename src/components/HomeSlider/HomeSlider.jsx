import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import sliderImages from "./Images";
import "../Functions/Scroll";

const HomeSliderContent = [
  {
    text1: `Aboard every yacht, innovative concepts will reveal their unexpected
    soul, offering you and your guests a practically perfect lifestyle
    experience.`,
  },
];

const HomeSlider = ({ TresureYacht }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    if (!carousel.current) return;
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-[#e8eaed] to-[#f8f6f3] py-16">
      <div className="reveal mx-auto w-[90%] max-w-6xl">
        <p className="ty-eyebrow">{TresureYacht}</p>
        <p className="mt-6 max-w-3xl border-l-4 border-treasure pl-6 font-playfair text-2xl font-light italic leading-relaxed text-navy sm:text-3xl">
          {HomeSliderContent[0].text1}
        </p>
      </div>

      <div className="mt-12 h-screen w-full">
        <motion.div
          ref={carousel}
          className="cursor-grab overflow-hidden px-4 active:cursor-grabbing"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-6"
          >
            {sliderImages.map((src, index) => (
              <motion.div
                key={index}
                className="h-full min-w-[min(85vw,28rem)] shrink-0"
              >
                <img
                  src={src}
                  alt={`Treasure Yacht gallery ${index + 1}`}
                  className="pointer-events-none h-[70vh] w-full rounded-2xl object-cover shadow-lg ring-1 ring-ink/10"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeSlider;
