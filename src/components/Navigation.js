import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <Link to="/">Projects</Link>
            <Link to="/Aboutme">About me</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Resume">Resume</Link>
        </div>
    );
}

export default Navigation;