import React from 'react';
import { BrowserRouter as Route, Routes, Outlet, Link} from 'react-router-dom';
import Aboutme from './components/pages/Aboutme';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import Resume from './components/pages/Resume';
import Projects from './components/pages/Projects';

function App() {
  return (
      <div className='flex-column justify-center align-center min-100-vh bg-success'>
        <Routes> 
        <Route path="/" element={<Projects />} />
        <Route path="/Aboutme" element={<Aboutme />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Resume" element={<Resume />} />
        </Routes>
      </div>
  );
}

function Projects() {
   return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Projects</Link>
          </li>
          <li>
            <link to="/Aboutme">About me</link>
          </li>
          <li>
            <link to="/Contact">Contact</link>
          </li>
          <li>
            <Link to="/Resume">Resume</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
   )
}

function Aboutme() {
  return (
    <div>
      <h2>Aboutme</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
    </div>
  );
}

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
    </div>
  );
}



export default App;
