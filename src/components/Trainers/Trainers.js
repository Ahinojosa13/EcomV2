import React from "react";
import "../Trainers/Trainers.css";
import b3aimg from "../../Images/me.webp";
import b3bimg from "../../Images/prisy.webp";
import b3cimg from "../../Images/cbum.webp";
import b3dimg from "../../Images/elika.webp";

const Trainer = () => {
    return (
        <div className="Trainerblock">
            <h1> Partners of EL TIGRE</h1>
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
    );
};
export default Trainer;        