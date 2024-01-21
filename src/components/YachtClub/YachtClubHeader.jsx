import React, {useState} from 'react';
import './yachtclub.css';
import NavBar from '../NavBar/NavBar';

const YachtClubHeader = () => { 
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!isMenuOpen);
    };
        
    return (
              <div className='YachtClub-Header'>
                    
                    <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                    {isMenuOpen ? null : (
                        
                        <div className='info-container'>
                            <h1>Yacht Club</h1>
                            <h3>Welcome to our Yacht's club </h3>
                        </div>
                    
                    )}
              
              </div>
    )
}

export default YachtClubHeader;