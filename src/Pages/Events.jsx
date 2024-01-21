import React from 'react'
import EventsHeader from '../components/Events/EventsHeader';
import EventsBody from '../components/Events/EventsBody';
import EventsContent from '../components/Events/EventsContent';
import EventsPartners from '../components/Events/EventsPartners';
import Footer from '../components/Footer/Footer';

const Parties = () => {
  return (
    <div>
        <EventsHeader />
        <EventsBody />
        <EventsContent />
        <EventsPartners />
        <Footer />
    </div>
  )
}

export default Parties;