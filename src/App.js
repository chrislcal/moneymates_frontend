
import './App.css';
import './styles/nav.css';
import './styles/categoryCard.css';
import './styles/home.css';

import React, { useState, useEffect } from 'react';
import Navbar from './components/Nav.js';
import CategoryCard from './components/CategoryCard.js';
import Home from './components/Home.js'




function App() {
  return (
    <div className="App">
      <header>
        <h1 className="app-name">MoneyMates</h1>
        <Navbar/>
      </header>
      <CategoryCard />
      <Home />
    </div>
  );
}

export default App;

