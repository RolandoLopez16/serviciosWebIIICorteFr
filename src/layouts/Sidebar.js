// src/layouts/Sidebar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, CarIcon } from 'lucide-react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      onMouseOver={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`h-full bg-red-500 text-white p-5 transition-all duration-300 flex flex-col items-center ${isExpanded ? 'w-60' : 'w-20'}`}
    >
 
      <img
        src="/assets/logoEmpresa.png"
        alt="Logo Empresa"
        className={`object-contain transition-all duration-300 ${isExpanded ? 'w-32 h-32' : 'w-12 h-12'}`}
      />

   
      {isExpanded && <h2 className="text-2xl font-bold mb-6 text-center">ServiApp</h2>}

      <nav className="w-full">
        <ul className="space-y-4">
          {[
            { to: "/", icon: <HomeIcon size={24} />, label: "INICIO" },
            { to: "/conductores", icon: <CarIcon size={24} />, label: "CONDUCTORES" }
          ].map((item, index) => (
            <li key={index} className="w-full">
              <Link
                to={item.to}
                className={`flex items-center w-full py-4 rounded transition-all duration-300 shadow-md ${isExpanded ? 'justify-start px-4 bg-red-600 hover:bg-red-700' : 'justify-center bg-red-500 hover:bg-red-600'}`}
              >
                {item.icon}
                {isExpanded && <span className="ml-4 font-bold">{item.label}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
