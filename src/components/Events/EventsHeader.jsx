import React,{useState} from 'react';
import './events.css';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import EventsVideoHeader from '../../assets/img/Videos/EventsHeader.mp4';
import '../Functions/Scroll';
import NavBar from '../NavBar/NavBar';

const EventsHeader = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
      setMenuOpen(!isMenuOpen);
    };
        return (

            <section className='EventsSection'>
                <div className='EventsNavOverlay'></div>
                <video src={EventsVideoHeader} autoPlay loop muted className='EventsHeaderVideo'></video>
                    
                    <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

                    {isMenuOpen ? null : (
                        <div className='CardContainer'>
                                <div className='card1 '>
                                    <h1>Having a Party?</h1>
                                    <p>Our team of designer's arrange some quality event's, like birthdays, meeting's and a lot more. </p>
                                <a href='#Partners' > <IoIosArrowDropdownCircle className='cardIcon'/> </a>
                                </div>
                                <div className='card2'>
                                    <h1>Addressing an Event?</h1>
                                    <p>Event's may bring a lot of joy when owning a yacht, like the f1 race you can experience every year on Monaco's port.</p>
                                    <a href='#Partners' > <IoIosArrowDropdownCircle className='cardIcon'/> </a>
                                </div>
                                <div className='card3'>
                                    <h1>Having a meet up?</h1>
                                    <p>It's a traditional way of saying welcome to new members of the group by linking together to enjoy that new experience.</p>
                                    <a href='#Partners' > <IoIosArrowDropdownCircle className='cardIcon'/> </a>
                                </div>
                        </div>
                    )}

            </section>
    )
}

export default EventsHeader;