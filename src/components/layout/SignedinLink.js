import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedinLink = () =>   // This is a functional component to dispaly the view for the users who have already login
{
    return (
            <ul className="right">
                <li><NavLink to='/create'>New Project</NavLink></li>
                <li><NavLink to='/'>Log Out</NavLink></li>
                <li><NavLink to='/' className="btn btn-floating pink lighten-4">Id</NavLink></li>
            </ul>
    );
    
}

export default SignedinLink;