import About from './components/About.js';
import Skill from './components/Skill';
import Contact from './components/Contact';
import Home from './components/Home';
import Navigation from './components/Navigation.js';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Navigation/>
        <BrowserRouter>
              <Routes>
                <Route path="/About" element={<About />} />
                <Route path="/" element={<Home />} />
                <Route path="/Skill" element={<Skill />} />
                <Route path="/Contact" element={<Contact />} />

              </Routes>
              </BrowserRouter>
    </div>
  );
}

export default App;
