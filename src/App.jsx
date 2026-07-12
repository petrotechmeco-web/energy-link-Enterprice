import React from 'react';
import Hero from './components/Hero';
import AboutSolutions from './components/AboutSolutions';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-green selection:text-brand-dark">
      <Hero />
      <AboutSolutions />
    </div>
  );
}
