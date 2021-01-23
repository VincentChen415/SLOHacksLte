import React from 'react';

const { Link } = require("react-router-dom");

function HomePage({}) {
    return(
        <div>
            <div>Homepage</div>
            <Link className="" to={"/screener"}>
                Self Screener
            </Link>
        </div>

    );
};

export default HomePage