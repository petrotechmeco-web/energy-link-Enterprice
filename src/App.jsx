import React from 'react';
import Hero from './components/Hero.jsx';
import AboutSolutions from './components/AboutSolutions.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-green selection:text-brand-dark">
      <Hero />
      <AboutSolutions />
    </div>
  );
}
