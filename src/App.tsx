import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MainLayout from './Layout/MainLayout';
import Hero from './pages/Hero';
import Stats from './pages/Stats';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import ContactMe from './pages/ContactMe';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="hero" element={<Hero />} />
          <Route path="stats" element={<Stats />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="skills" element={<Skills />} />
          <Route path="contact" element={<ContactMe />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;