import './HomePage.css';
import React from 'react';

const { Link } = require("react-router-dom");

function HomePage({}) {
    return(
        <div className="homepage-container">
            <iframe id="human-embed" frameBorder="0" style={{position: "absolute", top: "60px"}} width="100%" height="600" allowFullScreen="true" src="https://human.biodigital.com/viewer?id=production/maleAdult/coronavirus_structure&ui-chapter-list=true&ui-label-list=true&ui-fullscreen=false&ui-all=true&ui-search=false&load-rotate=1&ui-tools=false&ui-info=false&uaid=86wP4"/>
        </div>
    );
};

export default HomePage