import React from 'react';
import './ocean.css';
import { AiOutlineArrowRight } from 'react-icons/ai';
import '../Functions/Scroll';

function Ocean() {
  return (
    <div className='ocean'>
        <div className='ocean-container reveal'>
            <h1>Treasure Yacht's</h1>
            <a href='/'>Explore Map <AiOutlineArrowRight className='Arrow-right'/></a>
        </div>
    </div>
  )
}

export default Ocean;