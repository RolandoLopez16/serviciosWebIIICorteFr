// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';
import ConductoresView from './views/ConductoresView';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-6 flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/conductores" element={<ConductoresView />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

// Componente Home para la ruta de inicio
const Home = () => {
  return (
    <div className="flex items-center justify-center h-full w-full" >
      <img src="/assets/logoEmpresa.png" alt="Logo Empresa" className="w-80 h-80 object-contain" />
    </div>
  );
};

export default App;
