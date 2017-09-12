import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
    return (
        <div>
            <header>{'Header component'}</header>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/test">Test</Link>
            </nav>
        </div>
    )
};

export default Header;