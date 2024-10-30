import HomePage from '@/pages/HomePage';
import Nav from '@/pages/Nav';
import React from 'react';
import About from '@/pages/about';
import Timeline from '@/pages/timeline';
import Team from '@/pages/team';
import Footer from '@/pages/footer';
import PitchathonSection from '@/pages/pitchsec';

const MainPage = () => {
  return (
    <div className="overflow-hidden">
      <Nav />
      <HomePage />
      <PitchathonSection />
      <About />
      <Timeline />
      <Team />
      <Footer />
    </div>
  );
};

export default MainPage;
