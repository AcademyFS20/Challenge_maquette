import React from 'react';
import {GiFishingHook} from "react-icons/gi";
import Bylot from "../assets/Bylot.jpg";
import Anticosti from "../assets/Anticosti.jpg";
import CapBreton from "../assets/CapBreton.jpg";
import {FaPlus} from "react-icons/fa";
import BylotMap from "../assets/BylotMap.png";
import AnticostiMap from "../assets/AnticostiMap.png";
import CapeBretonMap from "../assets/CapeBretonMap.png";
import BouchetMartin from "../assets/BouchetMartin.jpg";
import SchmitJoseph from "../assets/SchmitJoseph.jpg";
import FrancoisPierre from "../assets/FrancoisPierre.jpg";
function Home() {
    return (
        <div className="homepage">
            <div className="forfait">
            <h1 className="forfaittitle"><GiFishingHook/> FORFAITS <GiFishingHook/></h1>
            </div>
            <div className="homepagecontainer">
            
            <div className="cardcontainer">
            <div className="card">
                <img src={Bylot}/>
                <h2 className="title">ILE DE BYLOT</h2>
                <p className="description">lorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis purus</p>
                <div className="icon"><FaPlus/></div>
            </div>
            <div className="card">
                <img src={Anticosti}/>
                <h2 className="title">ILE D'ANTICOSTI</h2>
                <p className="description">lorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis purus</p>
                <div className="icon"><FaPlus/></div>
            </div>
            <div className="card">
                <img src={CapBreton}/>
                <h2 className="title">ILE DE CAPE BRETON</h2>
                <p className="description">lorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis purus</p>
                <div className="icon"><FaPlus/></div>
            </div>
            
            </div>

            <div className="formsection">
                <div className="formtitle">
                    <h2 className="formh2">RESERVER VOTRE EXPERIENCE</h2>
                    <p className="formp">lorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis purus</p>
                </div>
                <form className="formulaire">
                    <label>CHECK-IN <input type="date"/>
                    </label>
                    <label>CHECKOUT <input type="date"/>
                    </label>
                    <label>ADULTES
                        <select>
                            <option value="1 Adulte">1 Adulte </option>
                            <option value="2 Adultes"> 2 Adultes</option>
                            <option value="2 Adultes et 1 enfant"> 2 Adultes et 1 enfant </option>
                            <option value="2 Adultes et 2 enfants"> 2 Adultes et 2 enfants</option>

                        </select>

                    </label>
                    <button className='submit'>RESERVER</button>
                </form>
            </div>

            <div className="people">
                <h3 className="testimony">
                    ILS ONT DEJA VECU
                </h3>
                <hr/>
                <div className="peoplecards">
                <div className="peoplecard">
                    <img src={BylotMap} alt="map"/>
                    <img src={SchmitJoseph} alt="person"/>
                    <h3>SCHMIT, JOSEPH</h3>
                    <h4>MUNIQUE, ALLEMAGNE</h4>
                    <p>lorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum </p>
                </div>
                <div className="peoplecard">
                    <img src={AnticostiMap} alt="map"/>
                    <img src={BouchetMartin} alt="person"/>
                    <h3>BOUCHET, MARTIN</h3>
                    <h4>QUEBEC, CANADA</h4>
                    <p>lorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum </p>
                </div>
                <div className="peoplecard">
                    <img src={CapeBretonMap} alt="map"/>
                    <img src={FrancoisPierre} alt="person"/>
                    <h3>FANCOIS, PIERRE</h3>
                    <h4>PARIS, FRANCE</h4>
                    <p>lorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum Sagittis puruslorem ipsum</p>
                </div>
                </div>
            </div>

            </div>
        </div>
    );
}

export default Home;