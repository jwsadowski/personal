import React from 'react';
import Aboutme from './components/pages/Aboutme';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Projects from './components/pages/Projects';

function App() {
  return (
      <div className='flex-column justify-center align-center min-100-vh bg-success'>
        <BrowserRouter>
        <Routes> 
        <Route path="/" element={<Projects />} />
        <Route path="/Aboutme" element={<Aboutme />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resume" element={<Resume />} />
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
