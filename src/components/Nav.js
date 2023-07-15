import React, { useState } from 'react';
import Logo from "../Images/ElTigre'sGym-1.png"
import Banner from "../Images/Myproject-1.png"
// import { Link } from "react-router-dom";
// import Hamburger from "@material-ui/icons/Reorder";
// import "../styles/";

class Nav extends React.Component{
  render(){
  const [openLinks, setOpenLinks] = useState(false);    //Using State allows the to be default hidden unless clicked 

  const toggleNav = () => {
    setOpenLinks(!openLinks);
  }  
  return (
      <section id="nav">
        <div className='nav-left' id={openLinks ? "open" : "close"}> 
          <img src={Logo} alt='logo'/>
          <div className='hamburgerLinks'>
            <link to="/"> HOME </link>
            <link to="/etgp"> PRODUCTS </link>
            <link to="/contact"> CONTACT </link>
          </div>
        </div>  
        <div className='nav-middle'>
          <img src={Banner} alt='banner'/>
        </div>
        <div className='nav-right'>
          <link to="/"> HOME </link>
          <link to="/etgp"> PRODUCTS </link>
          <link to="/contact"> CONTACT </link>
          <button onClick={toggleNav}>
            {/* <Hamburger /> */}
          </button>
        </div>
      </section>
    );
  }
}

export default Nav;