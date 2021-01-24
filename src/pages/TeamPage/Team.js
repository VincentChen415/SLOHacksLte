import './Team.css';
import React from 'react';
import LinkedInLogo from './LinkedInlogo.png'

const { Link } = require("react-router-dom");

function TeamPage({}) {
    return(
        <div style={{position: "absolute", top: "660px"}}>
            <a href="https://www.linkedin.com/in/gabrielhyun/"> <img src= {LinkedInLogo}/></a>
            <a href="https://www.linkedin.com/in/vincentchen415/"> <img src={LinkedInLogo} /></a>
            <a href="https://www.linkedin.com/in/kaylyntrancp/"><img src = {LinkedInLogo}/></a>    
            <a href="https://www.linkedin.com/in/ecrz0/"><img src = {LinkedInLogo}/></a>    
        </div>

    );
};

export default TeamPage