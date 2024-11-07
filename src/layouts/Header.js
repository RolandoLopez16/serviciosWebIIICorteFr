// src/layouts/Header.js

import React from 'react';
import Truck from '../components/truck/truck';


const Header = () => {
  return (
    <header className="bg-red-500 text-white p-4 flex justify-between items-center">
      <Truck/>
      <h1 className="text-center text-3xl font-bold">App Serviespeciales López</h1>
      <Truck/>
    </header>
  );
};

export default Header;
