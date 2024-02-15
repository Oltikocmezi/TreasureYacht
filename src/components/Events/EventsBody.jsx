import React from "react";
import "./events.css";
import "../Functions/Scroll";

const EventsBodyContent = [
  {
    title1:
      "Every yacht is built to embody breathtaking beauty, surprising solutions and unparalleled technology, with the desire to spark long-lasting emotions.",
  },
];

function EventsBody() {
  return (
    <section className="Body">
      <div className="bodyParent">
        <div className="bodyChild1 reveal">
          <h1>{EventsBodyContent[0].title1}</h1>
        </div>
        <div className="bodyChild2"></div>
      </div>
    </section>
  );
}

export default EventsBody;
