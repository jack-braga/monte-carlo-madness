// import React, { useEffect, useState } from 'react';
import mcmLogo from '../assets/mcmLogo.png';
import gitHubLogo from '../assets/gitHubLogo.png';
import linkedInLogo from '../assets/linkedInLogo.svg';
import lightSun from '../assets/lightSun.svg';
import darkMoon from '../assets/darkMoon.svg';

const NavBar = ({ theme, toggleTheme }) => {

    return (
        <div className="navBar">
            <a href="#">
                <img src={mcmLogo} alt="mcmLogo" className="mcmLogo"></img>
            </a>
            <h1 className="title">Monte Carlo Madness</h1>
            <div className="socials">
                <a href="https://github.com/jack-braga/monte-carlo-madness" target="_blank" rel="noopener noreferrer">
                    <img src={gitHubLogo} alt="gitHubLogo" className="gitHubLogo"/>
                </a>
                <a href="https://www.linkedin.com/in/jack-braga-1493a9231/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedInLogo} alt="linkedInLogo" className="linkedInLogo"/>
                </a>
            </div>
            <div className="themeToggleContainer">
                <button type="button" className="themeToggleButton" onClick={toggleTheme} >
                    <img src={theme === "dark" ? darkMoon : lightSun} className="themeToggleIcon"/>
                </button>
            </div>
        </div>
    );
  };
  
  export default NavBar;