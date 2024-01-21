import React, { useState } from 'react'
import './header.css';
import NavBar from '../NavBar/NavBar';


const Header = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setMenuOpen(!isMenuOpen);
  };
  
  return (
    <div>
        <div className='nav-header-div' >
        <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}/>
        
        {isMenuOpen ? null : (

        
            <div className='box-div'>
                    <p className='p-header'>FREEDOM TO EXPLORE</p>
                    <p className='p2-header'>For new adventures, explore Treasure Yacht Group and, find what you need or think is best for you.</p>
                    <a href="#Body" className='link_wrapper'>Find out more ...</a>
            </div>
        )}    
        </div>
       
    </div>
  )
}

export default Header;