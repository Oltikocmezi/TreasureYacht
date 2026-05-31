import React from "react";
import "../Functions/Scroll";
import bodyBg from "../../assets/img/Body/body-bg.webp";
import eventsBodyImage from "../../assets/img/Parties/EventsBodyImage.avif";

const EventsBodyContent = [
  {
    title1:
      "Every yacht is built to embody breathtaking beauty, surprising solutions and unparalleled technology, with the desire to spark long-lasting emotions.",
  },
];

function EventsBody() {
  return (
    <section
      className="h-screen w-full bg-[#fffff0] bg-cover bg-center"
      style={{ backgroundImage: `url(${bodyBg})` }}
    >
      <div className="flex h-full w-full flex-row flex-wrap items-center justify-center">
        <div className="reveal relative bottom-[100px] h-[600px] w-[700px] max-lg:bottom-0 max-lg:h-auto max-lg:w-full max-lg:px-6">
          <h1 className="text-start font-sans text-[60px] font-extralight text-ink max-lg:text-4xl">
            {EventsBodyContent[0].title1}
          </h1>
        </div>
        <div
          className="relative top-[100px] h-[600px] w-[700px] bg-cover bg-center bg-no-repeat max-lg:top-0 max-lg:mt-8 max-lg:h-[400px] max-lg:w-full"
          style={{ backgroundImage: `url(${eventsBodyImage})` }}
        />
      </div>
    </section>
  );
}

export default EventsBody;
