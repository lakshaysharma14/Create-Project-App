import React from 'react';

const ProjectDetails=(props) =>    // Here we are getting props from the route parameters itself
{
    const id = props.match.params.id 
    
    return(
        <div className="container section project-details">
    
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>Test 123 ......</p>
            </div>
           
            <div className="card-action grey lighten-4 grey text">
                <div>Posted by Net Ninja</div>
                <div>18 Feb 1996,3pm</div>
            </div>
        
        </div>
        
        </div>
    )
}

export default ProjectDetails
