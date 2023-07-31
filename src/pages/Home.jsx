import React from "react";
import { Link } from "react-router-dom";
import b1img from "../Images/hometiger.webp";
import SlideShow from "../components/SlideShow/SlideShow";
// import Trainers from "../components/Trainers/Trainers";
// import "./styles/Trainers.css";
import b3aimg from "../Images/me.webp";
import b3bimg from "../Images/prisy.webp";
import b3cimg from "../Images/cbum.webp";
import b3dimg from "../Images/elika.webp";
import "../styles/Home.css";

function Home() {
  return (
    <div className="homeblock">
        <div className="block1" style={{ backgroundImage: `url(${b1img})` }}>
            <h1>El Tigre's Gear</h1>
            <p>BEGIN YOUR JOURNEY</p>
            <Link to="/ETGP">
            <button>ORDER NOW</button>
            </Link>
        </div>
        <div className="block2">
          <SlideShow />
        </div>  
        <div className="block3">
        <div className="Trainerblock">
            <h2> Partners of EL TIGRE</h2>
            <div className="trainers">
                <img src={b3aimg} alt='Anthony'/>
                <p><span>Anthony Hinojosa.</span>CEO at EL TIGRE</p>
                <p>Hi I'm Anthony also known as Tony El Tigre. The goal is to make YOUR JOURNEY to fitness as easy as possible to begin.</p>
            </div>
            <div className="trainers">
                <img src={b3bimg} alt='Prisy'/>
                <p><span>Priscila Montoya.</span>Personal Trainer at EL TIGRE</p>
                <p>My goal is to make YOUR JOURNEY a good routine with tips and tricks. Feel free to connect me via Intsagram: @prisymontoya</p>
            </div>
            <div className="trainers">
                <img src={b3cimg} alt='Cbum'/>
                <p><span>Chris Bumstead.</span>Personal Trainer at EL TIGRE</p>
                <p>My goal is to make YOUR JOURNEY a good routine with tips and tricks. Feel free to connect me via Intsagram: @cbum</p>
            </div>
            <div className="trainers">
                <img src={b3dimg} alt="Elika"/>
                <p><span>Elika Bang.</span>Personal Trainer at EL TIGRE</p>
                <p>My goal is to make YOUR JOURNEY a good routine with tips and tricks. Feel free to connect me via Intsagram: @elikabang</p>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Home;