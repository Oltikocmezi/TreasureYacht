import { useRef, useEffect, useState } from "react";
import YachtImages from "./YachtImages";
import { motion } from "framer-motion";
import "../Functions/Scroll";

const YachtSlider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    if (!carousel.current) return;
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="w-full">
      <div className="h-screen w-full">
        <motion.div ref={carousel} className="cursor-grab overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex"
          >
            {YachtImages.map((item, index) => (
              <motion.div className="h-full min-w-[60rem] p-2.5" key={index}>
                <img
                  src={item.src}
                  alt={item.text || "Yacht"}
                  className="pointer-events-none h-screen w-full object-cover"
                />
                <p className="font-sans text-[25px] font-light italic text-ink">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default YachtSlider;
