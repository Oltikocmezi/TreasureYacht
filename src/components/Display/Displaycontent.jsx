import React from "react";
import { TbSpeedboat } from 'react-icons/tb';
import Boat from '../../assets/img/Videos/Boat.mp4';

const Displaycontent = (props) => {
    const {button} = props
    return(
            
        <section id="Home">
            <div className="overlay"></div>
            
                <video src={Boat} autoPlay loop muted className="boat" />
                <div className="display-container">
                    <h1>Treasure Yacht's</h1>
                    <p>Group</p>
                    <a href="/Home"> {button} <TbSpeedboat className="Speed-boat" /> </a>
                </div>

        </section>
        
    )
}

export default Displaycontent;