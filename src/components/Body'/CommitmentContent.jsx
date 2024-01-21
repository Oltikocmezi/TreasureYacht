import React from 'react';
import Beach from '../../assets/img/Videos/CommitmentVideo.mp4';
import './body1.css';
import '../Functions/Scroll';


const CommitmentContent = () => {
  return (
    <section className='Commitment-sec'>
        <div className='Commitment-div'>
            <a className='Commitment-btn' href='/Home'> 🡨 OUR COMMITMENT</a>
            <h1 className='Commitment-h1'>EVOLVING TODAY, FOR TOMORROW</h1>
        </div>
        <div className='Commitment-img'></div>
        <div className='Commitment-info'>
            <h1 className='CommitmentH1 reveal'> As a leader in the field of nautical
                innovation, Treasure Yacht has always been
                committed to the creation of an
                ambitious and sustainable-oriented
                company culture.</h1>

                <div className='CommitmentVideo'>
                    <video src={Beach} autoPlay loop muted  />
                </div>
                <h1 className='CommitmentH2 reveal'>A bold and avant-garde stance that has allowed it to
                    grow and evolve constantly, embracing the challenge
                    of a future nurtured by an eco-conscious approach to
                    boat construction and human well-being
                  </h1>
        </div>
        
    </section>
  )
}

export default CommitmentContent;