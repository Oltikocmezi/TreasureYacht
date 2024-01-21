import React from 'react';
import './events.css';
import '../Functions/Scroll';
import EventsParty from '../../assets/img/Videos/Events-partys.mp4';

function EventsContent() {
  return (
    <section id='eventsContainer'>
        <div className='childContainer1 reveal'>
          <h1>A party, a bussines metting, a family dinner and more, what matter's is the quality and the idea of creating it. So don't hesitate to call us... </h1>
          <p>Contact us and we will do that miracle| (296) 729-4632 </p>
        </div>
        <div className='childContainer2'>
          <div className='childContainer2Overlay'></div>
            <video src={EventsParty} loop autoPlay muted className='childContainer1-Video'></video>         
        </div>
        <div className='childContainer3'></div>
    </section>
  )
}

export default EventsContent;