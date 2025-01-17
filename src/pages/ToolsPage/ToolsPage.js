import './ToolsPage.css';
import React from 'react';
import {tools} from '../../tools'

const { Link } = require("react-router-dom");

function ToolsPage({}) {
    return(
        <div id="ToolPageDiv"> 
        <h2>Displayed below is a list of resources we may find beneficial due to quarantine:</h2>
            <div></div>
            {tools.map((tool) => {
                return (     
               <div key={tool.id}> 
                  <h1>{tool.name} </h1> 
                   <a href={tool.link}> {tool.link}
                   </a>
                   <br/>
                   {`Description: ${tool.description}`}
               </div>
            )
            })
        }
        </div>

    );
};

export default ToolsPage