// src/layouts/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, CarIcon } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-60 h-full bg-red-500 text-white p-5 flex flex-col items-center">
      <img src="/assets/logoEmpresa.png" alt="Logo Empresa" className="w-32 h-auto object-contain mb-8" />
      <h2 className="text-2xl font-bold mb-10 text-center w-full">ServiApp</h2>
      <nav>
        <ul className="space-y-4">
          <li className="w-full">
            <Link
              to="/"
              className="flex flex-col items-center justify-center w-full py-4 bg-red-500 text-white-500 font-bold shadow-md hover:shadow-lg transition-shadow duration-300 hover:shadow-yellow-400 rounded"
            >
              <HomeIcon size={24} />
              <span className="mt-1">INICIO</span>
            </Link>
          </li>
          <li className="w-full">
            <Link
              to="/conductores"
              className="flex flex-col items-center justify-center w-full py-4 bg-red-500 text-white-500 font-bold shadow-md hover:shadow-lg transition-shadow duration-300 hover:shadow-yellow-400 rounded"
            >
              <CarIcon size={24} />
              <span className="mt-1">CONDUCTORES</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
