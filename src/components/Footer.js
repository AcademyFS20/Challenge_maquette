import React from 'react';
import {MdOutlineDoubleArrow} from 'react-icons/md'
import {RiFacebookCircleLine} from "react-icons/ri";
import {TiSocialTwitterCircular} from 'react-icons/ti';
import {IoLogoInstagram} from "react-icons/io";
import {FaWhatsapp} from "react-icons/fa";
import LogoBigFish from '../assets/LogoBigFish.png';
import {CgCopyright} from "react-icons/cg";
function Footer() {
    return (
        <div className='footer'>
            <div className="section1">
                <h2 className="share">PARTAGER</h2>
                <MdOutlineDoubleArrow/>
                <div className='footericons'>
                
                <RiFacebookCircleLine/>
                <TiSocialTwitterCircular/>
                <IoLogoInstagram/>
                <FaWhatsapp/>
                </div>
                <div className="newsletter">
                    <h2 className="info">ABONNEZ-VOUS A L'INFO LETTRE</h2>
                    <input type='text' placeholder="VOTRE COURRIEL" className="input"/>
                    <button className="buttonsubmit">SOUMETTRE</button>
                </div>


            </div>
            <div className="section2">
            <img src={LogoBigFish} className="logofish2"/>
            <div className="apropos">
                <a>A PROPOS</a>
                <a>FAQ</a>
                <a>CARRIERES</a>
                <a>TERMES ET CONDITIONS</a>

            </div>
            <hr className="hr"/>
            
            <h3><CgCopyright/>BigFishQC - Tous les droits réservés.</h3>



            </div>

            
        </div>
    );
}

export default Footer;