// src/layouts/Header.js

import React from 'react';
import Loader from '../components/loader/loader.js';

const Header = () => {
  return (
    <header className="bg-red-500 text-white p-4 flex justify-between items-center">
      <Loader/>
      <h1 className="text-center text-3xl font-bold">App Serviespeciales López</h1>
      <Loader/>
    </header>
  );
};

export default Header;
