import React, { useState } from 'react';
import Aboutme from './pages/Aboutme';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Projects from './pages/Projects';

function Navigation() {
    const [currentPage, setCurrentPage] = useState('Projects');

    const renderPage = () => {
        if (currentPage === 'Aboutme') {
            return <Aboutme />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
    };

    const HandlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {renderPage(HandlePageChange)}
        </div>
    );
}

export default Navigation;