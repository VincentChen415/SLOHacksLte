import './Team.css';
import React from 'react';
import LinkedInLogo from './LinkedInlogo.png'

const { Link } = require("react-router-dom");

function TeamPage({}) {
    return(
        <div style={{position: "absolute", top: "660px"}}>
            <a href="https://www.linkedin.com/in/vincentchen415/"> <img src={LinkedInLogo} /> </a>
            <a href="https://LinkedIn.com/vincentchen415">Vincent's LinkedIn</a>    
        </div>

    );
};

export default TeamPage