import React         from 'react';
import { Link }      from 'react-router-dom';
import SignedinLink  from './SignedinLink';
import SignedoutLink from './SignedoutLink';

const Navbar = () =>
{
    return (
        <nav className="nav-wrapper #212121 grey darken-4">
            <div className="container">
                <Link to = '/' className ="brand-logo">Project Arena</Link>
                <SignedinLink />
                <SignedoutLink />
            </div>
        </nav>
    );
    
}

export default Navbar;