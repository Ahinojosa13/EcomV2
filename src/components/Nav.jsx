import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react'
import Logo from "../Images/ElTigreGym-1.png";
import Banner from "../Images/Myproject-1.png";
import '../styles/Nav.css';

const Nav = () => {
  const [openLinks, setOpenLinks] = useState(false);    //Using State allows the to be default hidden unless clicked 

  const toggleNav = () => {
    setOpenLinks(!openLinks);
  };

  return (
      <section id="nav">
        <div className='nav-left' id={openLinks ? "open" : "close"}> 
          <img src={Logo} alt='El Tigre logo'/>
          <div className='hamburgerLinks'>
            <Link to="/"> HOME </Link>
            <Link to="/etgp"> PRODUCTS </Link>
            <Link to="/contact"> CONTACT </Link>
          </div>
        </div>  
        <div className='nav-middle'>
          <img src={Banner} alt='Website banner'/>
        </div>
        <div className='nav-right'>
          <Link to="/"> HOME </Link>
          <Link to="/etgp"> PRODUCTS </Link>
          <Link to="/contact"> CONTACT </Link>
          <button onClick={toggleNav}>
            <Hamburger />
          </button>
        </div>
      </section>
  );
};


export default Nav;