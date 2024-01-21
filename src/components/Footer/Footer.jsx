import React from 'react';
import { FaInstagramSquare } from 'react-icons/fa';
import { IoLogoFacebook } from 'react-icons/io';
import { ImYoutube } from 'react-icons/im';
import { BsLinkedin } from 'react-icons/bs';
import './footer.css';


const Footer = () => {

  return (
        <footer id="footer">
            <div className='inside-footer'>
                <div className="footerChild">
                    <h1 className='footerText'>CONTINUE TO GO BEYOND, WITH US</h1>
                </div>
                <div className="icons">
                    <FaInstagramSquare className='insta' />
                    <IoLogoFacebook className='facebook' />
                    <ImYoutube className='youtube' />
                    <BsLinkedin className='linkedin' />
                </div>
            </div>
                <div class="copyright">
                    <p>.Copyright &copy; 2023 by Treasure yacht's. All rights reserved.</p>
                </div>
        </footer>
  )
}

export default Footer;