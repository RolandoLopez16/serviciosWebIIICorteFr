// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';
import ConductoresView from './views/ConductoresView';
import HomeView from './views/HomeView';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-6 flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<HomeView />} />
              <Route path="/conductores" element={<ConductoresView />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
