import React from "react";
import { Link } from "react-router-dom";
import b1img from "../Images/hometiger.webp";
import SlideShow from "../components/SlideShow/SlideShow";
import Trainer from "../components/Trainers/Trainers";

// import "../styles/Home.css";

function Home() {
  return (
    <div className="homeblock">
        <div className="block1" style={{ backgroundImage: `url(${b1img})` }}>
            <h1> El Tigre's Gear </h1>
            <p>BEGIN YOUR JOURNEY</p>
            <Link to="/ETGP">
            <button> ORDER NOW </button>
            </Link>
        </div>
        <SlideShow />
        <Trainer />
    </div>
  );
}

export default Home;