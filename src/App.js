import React from 'react';
import Aboutme from './components/pages/Aboutme';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Projects from './components/pages/Projects';
import Navigation from './components/Navigation';
import './styles.css' 

function App() {
  return (
      <div className='flex-column justify-center align-center bg-success'>
        <Navigation />
        <Routes> 
        <Route path="/" element={<Projects />} />
        <Route path="/Aboutme" element={<Aboutme />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
        </Routes>
      </div>
  );
}

export default App;
