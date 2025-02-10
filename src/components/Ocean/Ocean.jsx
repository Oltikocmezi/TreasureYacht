// import React from "react";
// import "./ocean.css";
// import "../Functions/Scroll";
// import TreasureYachtOcean from "../../assets/img/Videos/TreasureYachtOcean.mp4";

// function Ocean(props) {
//   const { h1 } = props;
//   return (
//     <div className="ocean">
//       <video
//         src={TreasureYachtOcean}
//         autoPlay
//         loop
//         muted
//         className="TreasureYachtOcean"
//       />
//       <div className="ocean-container reveal">
//         <h1>{h1}</h1>
//       </div>
//     </div>
//   );
// }

// export default Ocean;

import React from "react";
import "../Functions/Scroll";
import TreasureYachtOcean from "../../assets/img/Videos/TreasureYachtOcean.mp4";

function Ocean({ h1 }) {
  return (
    <div className="flex justify-center items-center w-full h-[120vh] text-rendering-optimizeLegibility scroll-smooth">
      <video
        src={TreasureYachtOcean}
        autoPlay
        loop
        muted
        className="absolute w-full h-[120vh] object-cover"
      />
      <div className="reveal relative flex flex-col items-center justify-center w-fit h-fit">
        <h1 className="font-dancing text-white w-full text-[50px] text-center lg:text-[100px] ">
          {h1}
        </h1>
      </div>
    </div>
  );
}

export default Ocean;
