import React from 'react';
import {MdVerified} from 'react-icons/md';
import {FaHandshake} from 'react-icons/fa';
import {MdDirectionsBoatFilled} from 'react-icons/md';
import {AiOutlineTeam} from 'react-icons/ai';


const About =() => {
  return (
    <section className='about'>
        <div className='ButtonParent'>
            <a href='/home' className='aboutButton'>BACK</a>
        </div>
        <div className='aboutItems'>
            <h1 className='Title'>-OUR PROMISE TO YOU-</h1>
            <section className='Cards'>
                <div className='Card1'>
                    <MdVerified className='verified' />
                    <h1 className='safe'>SAFE</h1>
                    <p className='safeText'> ⏵ Qualified Loadmasters</p>
                    <p className='safeText'> ⏵ In-house engineering team creates lift- and stowage plans</p>
                    <p className='safeText'> ⏵ Own quality controlled cradles and lifting materials managed from global hubs</p>
                    <p className='safeText'> ⏵ Well-trained and experienced crew on board of our vessels</p>
                </div>
                <div className='Card2'>
                    <MdDirectionsBoatFilled className='verified' />
                    <h1 className='safe'>RELIABLE</h1>
                    <p className='safeText'> ⏵ Guaranteed global sailings</p>
                    <p className='safeText'> ⏵ 120+ company owned vessels</p>
                    <p className='safeText'> ⏵ Inhouse sales, operations and engineering team</p>
                    <p className='safeText'> ⏵ Marine Cargo insurance with best coverage in the industry</p>
                
                </div>
                <div className='Card3'>
                    <AiOutlineTeam className='verified' />
                    <h1 className='safe'>PERSONAL</h1>
                    <p className='safeText'> ⏵ Your own personal single point of contact from enquiry to discharge</p>
                    <p className='safeText'> ⏵ Local customs partners for your export & import clearance</p>
                    <p className='safeText'> ⏵ Global network of expert Sevenstar offices and local yacht service agents</p>
                </div>
                <div className='Card4'>
                    <FaHandshake className='verified' />
                    <h1 className='safe'>TRUSTWORTHY</h1>
                    <p className='safeText'> ⏵ Transparent offers and fair pricing</p>
                    <p className='safeText'> ⏵ 30+ years dedicated yacht transport experience with traceable track record</p>
                    <p className='safeText'> ⏵ Preferred shipping partner for many boat yards and yacht brands</p>
                    <p className='safeText'> ⏵ Member of the Spliethoff Group, established in 1921 (100 years)</p>
                
                </div>
            </section>
        </div>
    </section>
  )
}

export default About;