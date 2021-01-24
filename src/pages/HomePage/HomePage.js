import './HomePage.css';
import React from 'react';
import phone from './phone.jpg';

const { Link } = require("react-router-dom");

function HomePage({}) {
    return(
        <div className="homepage-container">
            <div className="covid-model">
            <iframe id="human-embed" frameBorder="0" style={{top: "60px"}} width="100%" height="550" allowFullScreen="true" src="https://human.biodigital.com/viewer?id=production/maleAdult/coronavirus_structure&ui-chapter-list=true&ui-label-list=true&ui-fullscreen=false&ui-all=true&ui-search=false&load-rotate=1&ui-tools=false&ui-info=false&uaid=86wP4"/>
            </div>
            
            <div class="a">
            <h4>"COVID-19 Virus Structure"</h4>
            <p>This interactive 3D model depicts the external structure of SARS-CoV-2 on a molecular level. To learn more about how the virus works, click on the individual text boxes of each protein. This resource is powered by BioDigital.</p>
            </div>
            <br/>
            <br/>

            <div className="covid-table">
            <iframe src="https://public.domo.com/cards/aAR5B" width="100%" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>
            </div>

            <div className="covid-map">
            <iframe src="https://public.domo.com/cards/axpDJ" width="100%" height="600" marginheight="0" marginwidth="0" frameborder="0"></iframe>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div class="b">
            <h1>"[COVID-19] spreads through respiratory droplets or small particles, such as those in aerosols, produced when an infected person coughs, sneezes, sings, talks, or breathes."</h1>
            </div>
            <div class="d">
            <h3>- Centers for Disease Control and Prevention (CDC)</h3>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <div>
                <img className="picture1" src={phone}>
                </img>
            </div>
           
            <br/>
            <br/>
            <div class="c">
            <h1>Our Mission/Goal</h1>
            <p>"The purpose of 'COVID Decoders' is to design a user-friendly interface that provides helpful information to support those affected by the recent COVID-19 outbreak. In addition to educating the public body about the virus itself and how to limit its spread, this website offers several tools to improve one's well-being while in quarantine. We hope provide further knowledge to those at risk by making the information readily accessible."</p>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

        </div>
    );
};

export default HomePage