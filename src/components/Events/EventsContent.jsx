import React from "react";
import "../Functions/Scroll";
import EventsParty from "../../assets/img/Videos/Events-partys.mp4";
import bodyBg from "../../assets/img/Body/body-bg.webp";

const EventsContentArray = [
  {
    text1:
      "A party, a bussines metting, a family dinner and more, what matter's is the quality and the idea of creating it. So don't hesitate to call us... ",
    text2: "Contact us and we will do that miracle| (296) 729-4632 ",
  },
];

function EventsContent() {
  return (
    <section
      id="eventsContainer"
      className="relative flex h-[80vh] w-full items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bodyBg})` }}
    >
      <div className="reveal flex h-full w-[40%] flex-col items-center max-lg:w-full max-lg:px-6">
        <h1 className="mt-5 w-[70%] border-b-2 border-ink pl-2.5 text-start font-sans text-[60px] font-extralight text-ink max-lg:text-4xl">
          {EventsContentArray[0].text1}
        </h1>
        <p className="mt-10 w-[70%] text-start font-sans text-[30px] font-extralight text-ink max-lg:text-xl">
          {EventsContentArray[0].text2}
        </p>
      </div>

      <div className="relative h-full w-[60%] max-lg:mt-8 max-lg:h-[50vh] max-lg:w-full">
        <div className="absolute inset-0 z-[1] bg-black/30" />
        <video
          src={EventsParty}
          loop
          autoPlay
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export default EventsContent;
