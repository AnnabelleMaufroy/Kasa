//import { useState } from 'react'np
import './App.css'
//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/header';
import Footer from './components/Footer';
import Logements from './pages/Logement';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return(
    <Router >
      <Header />
        <main>
          <Routes>
            <Route path="/" element={< Home/> } />
            <Route path="/Logement" element={ < Logements/>} />
            <Route path="/About" element={< About/>} />
            <Route path="*" element={< NotFound/>} />
          </Routes>
        </main>
      <Footer />
    </Router>
  );
}

export default App
