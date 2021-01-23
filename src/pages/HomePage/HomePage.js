import './HomePage.css';
import React from 'react';

const { Link } = require("react-router-dom");

function HomePage({}) {
    return(
        <div>
            <div>Homepage</div>
            <div>
                <Link className="" to={"/screener"}>
                    Self Screener
                </Link>
            </div>
            <div>
                <Link className="" to={"/tools"}>
                    Tools
                </Link>
            </div>
        </div>

    );
};

export default HomePage