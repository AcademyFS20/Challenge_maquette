import React from 'react';
import LogoBigFish from '../assets/LogoBigFish.png';
import {BsFacebook} from 'react-icons/bs';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {TiSocialYoutubeCircular} from 'react-icons/ti';
function Navbar() {
    return (
        <div className='navbar'>
            <div className='sec1'>
            <img src={LogoBigFish} className="logofish"/>
            <div className="iconslang">
            <div className="icons">
            <BsFacebook className="facebook"/>
            <AiFillTwitterCircle className="twitter"/>
            <AiFillInstagram className="instagram"/>
            <TiSocialYoutubeCircular className="youtube"/>
            </div>
            <select className="options">
                <option value="français">Français</option>
                <option value="Anglais">Anglais</option>
                <option value="Arabe">Arabe</option>
            </select>
            </div>
            </div>
            <div className="links">
            <a>RESERVER</a>
            <a>CONTACTEZ-NOUS</a>
            </div>
            <div className="slogan">
                <h1 className="one">Vivre UNE</h1>
                <h1 className="two">EXPERIENCE</h1>
                <h1 className="three">INOUBLIABLE!</h1>
            </div>
            
        </div>
    );
}

export default Navbar;