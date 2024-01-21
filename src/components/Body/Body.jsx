import React from 'react'
import './body.css';
import '../Functions/Scroll';

const Body = () => {
  return (
   
   <div id='Body'>
        <div className='body-line reveal'>  THE LATEST FROM OUR WORLD </div>     
            <div className='parent-div1 reveal'>
                    <div className='box1 reveal'>
                        <div className='box1-content reveal'>
                            
                            <h1 className='box-h1'>Yacht's</h1>
                            <p className='box-p'>Explore more of what we have to offer, different designs, forms and a variety of sizes for our yacht's.</p>
                            <a className='link-body' href='/Yacht'>EXPLORE</a>
                        
                        </div>
                    </div>

                    <div className='box2 reveal'>
                          <div className='box1-content reveal'>
                            
                            <h1 className='box-h1'>Events</h1>
                            <p className='box-p'>It's not living your best life, without having that amazing party on your masterpice yacht.</p>
                            <a className='link-body' href='/Events'>EXPLORE</a>
                          
                          </div>
                    </div>

                    <div className='box3 reveal'>
                      <div className='box1-content reveal'>
                          
                          <h1 className='box-h1'>Yacht Club</h1>
                          <p className='box-p'>Join our Yacht Club, and enjoy what we have to offer.</p>
                          <a className='link-body' href='/YachtClub'>EXPLORE</a>
                        
                        </div>
                    </div>

                    
            </div>
    </div>
  )
}

export default Body;