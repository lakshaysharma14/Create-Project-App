import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedoutLink = () => // Functional component to display the view who have logged out....
{
    return (
        <ul className="right">
            <li><NavLink to='/signup'>Sign Up</NavLink></li>
            <li><NavLink to='/signin'>Login</NavLink></li>
        </ul>
    );
    
}

export default SignedoutLink;