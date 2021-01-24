import './Team.css';
import React from 'react';
import LinkedInLogo from './LinkedInlogo.png'
import vincent from './me.png'
import gabe from './Gabe.jpg'
import enrico from './enrico.jpg'
import kaylyn from './ktran.jpeg'

const { Link } = require("react-router-dom");

function TeamPage({}) {
    return(
        <div className="parent">
        <div>
            <div className="photo-row"> 
            <div className="photo-child">
            <img className="photo-me"src={gabe}/>
                </div>
            <div className="photo-child">
            <a href="https://www.linkedin.com/in/gabrielhyun/"> 
            <img className="photo" src= {LinkedInLogo}/></a>
            </div>
            </div>
            <div className="row-description">
            <h1>Gabe Hyun</h1>
            <p>Hi! I'm Gabe Hyun and I am a 4th year CS student with a minor
                in mathematics. I am from San Jose and 
                a fun fact is I spend too much time playing video games! I worked on setting up React and 
                helped set up the skeleton of the website.
            </p>
            <br/>
            <br/>
        </div>
        </div>
        <div>
            <div className="photo-row"> 
            <div className="photo-child">
            <img className="photo-me"src={vincent}/>
                </div>
            <div className="photo-child">
            <a href="https://www.linkedin.com/in/vincentchen415/"> 
            <img className="photo" src= {LinkedInLogo}/></a>
            </div>
            </div>
            <div className="row-description">
            <h1>Vincent Chen</h1>
            <p>My name's Vincent and I am a 2nd year ME student planning to concentrate
                in mechatronics. I'm from San Francisco and I enjoy rock climbing and
                tennis in my free time. Fun fact: I have scars from chopsticks! This is my first hackathon and I learned a lot 
                through the coding I did today. I created the team page and helped with CSS around the webstie. 
                This was a great event and really made me want to get back into coding.
            </p>
            <br/>
            <br/>
        </div>
        </div>
        <div>
            <div className="photo-row"> 
            <div className="photo-child">
            <img className="photo-me"src={kaylyn}/>
                </div>
            <div className="photo-child">
            <a href="https://www.linkedin.com/in/kaylyntrancp/"> 
            <img className="photo" src= {LinkedInLogo}/></a>
            </div>
            </div>
            <div className="row-description">
            <h1>Kaylyn Tran</h1>
            <br/>
            <p>I am a 2nd-year Electrical Engineering major who has plans to pursue intellectual property law in the future! 
                I hope to utilize and apply the skills that I’ve learned as an engineer into law. I never had much experience with coding (or using languages such as JavaScript or HTML etc.) until I came to Cal Poly. I had so much fun learning the basics through this hackathon event 
                and I think it was a great opportunity to expand my horizons while spending time/working with friends! In this project, more specifically, I helped design the home page and additionally 
                imported data used on the ‘Tools’ page. Fun fact about me: my bedtime is usually 9:30 pm (10:00 pm if I’m feelin’ a lil saucy) </p>
        </div>
        <br/>
        <br/>
        </div>
        <div>
            <div className="photo-row"> 
            <div className="photo-child">
            <img className="photo-me"src={enrico}/>
                </div>
            <div className="photo-child">
            <a href="https://www.linkedin.com/in/ecrz0/"> 
            <img className="photo" src= {LinkedInLogo}/></a>
            </div>
            </div>
            <div className="row-description">
            <h1>Enrico Cruz
            </h1>
            <br/>
            <p>I’m a 1st generation Latino Mechanical Engineer. I’m hoping to concentrate in mechatronics but anything can change. 
                I want to have some exposure to coding so that's why I joined with my Brothers and Sisters from my fraternity to do this hackathon. It was a lot of fun learning a new coding language and actually understanding most of it. 
                Fun Fact about me I met Frank Ocean at my work in Panera and told him he looked an awful lot like Frank Ocean 
                I didn’t realize until after he left. I worked on the Mental Health Covid Blog! </p>
        </div>
        </div>
        
        
        </div>
    );
};
{/* <a href="https://www.linkedin.com/in/vincentchen415/"> <img src={LinkedInLogo} /></a>
<a href="https://www.linkedin.com/in/kaylyntrancp/"><img src = {LinkedInLogo}/></a>    
<a href="https://www.linkedin.com/in/ecrz0/"><img src = {LinkedInLogo}/></a>     */}

export default TeamPage