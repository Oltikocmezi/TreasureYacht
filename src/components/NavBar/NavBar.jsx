import React, {  useState } from 'react'
import '../NavBar/navbar.css';
import { FaBars } from 'react-icons/fa'; 
import { ImCross } from 'react-icons/im';
import '../Functions/Scroll';
import logo1 from '../../assets/img/Icons/icons8-ship-wheel-101.png'; 

const MenuItems = [
    {
        
        title: 'Home',
        url: '/Home',
        cName: 'links ',
        

    },
    {
        
        title: 'About',
        url: '/About',
        cName: 'links',

    },
    {
        
        title: 'Yachts',
        url: '/Yacht',
        cName: 'links',

    },
    {
        
        title: 'Events',
        url: '/Events',
        cName: 'links',

    },
    {
        
        title: 'Yacht Club',
        url: '/YachtClub',
        cName: 'links', 

    },
    {
        
        title: 'Membership',
        url: '/Membership',
        cName: 'links',

    },
]


const NavBar = ({ isMenuOpen, toggleMenu }) => {
   const [Mobile, setMobile] = useState(false);
    
   
   return (
            <div>
                <nav className='navbar'>
                        <img src={ logo1 } alt='logo' className='logo' />
                        <ul className={Mobile || isMenuOpen ? "nav-links-mobile " : "nav-links "} onClick={() => setMobile(true)}>
                            {MenuItems.map((item, index) => {
                                return(
                                    
                                    <li key={index}>
                                        <a className={item.cName} href={item.url} onClick={() => { setMobile(false); toggleMenu();}}>
                                             {item.title}
                                        </a>
                                    </li>
                                )
                            })}
                            
                        </ul>
                        <button onClick={() => {setMobile(!Mobile); toggleMenu();}} className='mobile-menu-icon'>
                            {Mobile? <ImCross className='cross' /> : <FaBars className='bars' />}
                        </button>
                </nav>
            
             </div>
    ) 
}

export default NavBar;