import HomePage from '@/pages/HomePage';
import Nav from '@/pages/Nav';
import React from 'react';
import About from '@/pages/about';
import Timeline from '@/pages/timeline';
import Team from '@/pages/team';

const MainPage = () => {
  return (
    <div className="overflow-hidden">
      <Nav />
      <HomePage />
      <About />
      <Timeline />
      <Team />
    </div>
  );
};

export default MainPage;
