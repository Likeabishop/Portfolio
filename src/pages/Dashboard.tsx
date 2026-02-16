import React from 'react';
import ContactMe from './ContactMe';
import Projects from './Projects';
import Skills from './Skills';
import AboutMe from './AboutMe';
import Stats from './Stats';
import Hero from './Hero';

const Dashboard: React.FC = () => {

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* About Section */}
      <AboutMe />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <ContactMe />
    </div>
  );
};

export default Dashboard;