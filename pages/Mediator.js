// pages/Mediator.js

import React from 'react';
import ConfirmationComponent from '@/components/ConfirmationComponent';
import Nav from './Nav';
const Mediator = () => {
  return (
    <div>
      <Nav />

    <div className="min-h-screen font-mono bg-gray-100 flex items-center justify-center">

      <div className="flex flex-col items-center">
   
        <ConfirmationComponent />
      </div>
    </div>
    </div>
  );
}

export default Mediator;
