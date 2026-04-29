import React from 'react';
import Hero from './Hero';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Dashboard: React.FC = () => {
  useDocumentTitle('Welcome');

  return (
    <div>
      {/* Hero Section */}
      <Hero />
    </div>
  );
};

export default Dashboard;