import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
    return (
        <div>
            <header className="header">
                <label className="header-title">Header Component Renders here</label>
                <nav className="header-nav">
                    <Link to="/about">About</Link>
                    <Link to="/test">Contact Us</Link>
                </nav>
            </header>
        </div>
    )
};

export default Header;