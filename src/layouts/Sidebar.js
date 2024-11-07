// src/layouts/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import Bottle from '../components/bottle/bottle.js';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-red-500 text-white p-5">
      <h2 className="text-2xl font-bold mb-6">ServiApp</h2>
      <nav>
        <ul>
          <li className="mb-5">
            <Link to="/" className="hover:text-gray-400">Inicio</Link>
          </li>
          <li className="mb-5">
            <Link to="/conductores" className="hover:text-gray-400">Conductores</Link>
          </li>
               <li className='flex  items-center'>
                <Bottle/>
               </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
