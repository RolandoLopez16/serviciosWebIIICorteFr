// src/layouts/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import Bottle from '../components/bottle/bottle.js';
import { HomeIcon, CarIcon } from 'lucide-react';


const Sidebar = () => {
  return (
    <div className="w-50 h-full pt-40 bg-red-500 text-white p-5">
      <h2 className="text-2xl font-bold mb-6">ServiApp</h2>
      <nav>
        <ul>
          <li className="mb-8 flex gap-4"><HomeIcon/>
            <Link to="/" className="hover:text-gray-400 font-bold">INICIO</Link>
          </li>
          <li className="mb-8 flex gap-4"><CarIcon/>
            <Link to="/conductores" className="hover:text-gray-400 font-bold">CONDUCTORES</Link>
          </li>
               <li className='flex items-center'>
                <Bottle/>
               </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
