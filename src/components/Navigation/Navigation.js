import './Navigation.css';
import React from 'react';

const { Link } = require("react-router-dom");

function Navigation({}) {
    return(
        <div className="nav-container">
            <div className="nav-items">
                <div className="nav-brand">
                    COVID Decoded
                </div>
                <Link className="nav-item" to={"/"}>
                    Home
                </Link>
                <Link className="nav-item" to={"/screener"}>
                    Self Screener
                </Link>
                <Link className="nav-item" to={"/tools"}>
                    Tools
                </Link>
                <Link className="nav-item" to={"/mental"}>
                    Mental
                </Link>
                <Link className="nav-item" to= {"/team"}>
                    The Team
                </Link>
            </div>
        </div>

    );
};

export default Navigation