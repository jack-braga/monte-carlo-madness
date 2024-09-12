// import React, { useEffect, useState } from 'react';
import logo from '../assets/mcmLogo.png';

const NavBar = ({ distribution, id, onSetDistribution, onDelete }) => {

    return (
        <div className="navBar">
            <a href='#'>
                <img src={logo} alt='mcmLogo' className='logo'></img>
            </a>
            <h1 className='title'>Monte Carlo Madness</h1>
            <div className='socials'>

            </div>
            <button type='button' className='themeToggle'></button>
        </div>
    );
  };
  
  export default NavBar;