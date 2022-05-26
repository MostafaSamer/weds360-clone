import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import '../src/assets/styles/global.scss'

import Navbar from "./app/components/navbar/navbar"
import Footer from "./app/components/footer/footer"
import Home from './app/pages/home';
import SingilePhoto from './app/pages/singlephoto';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/photo/:id" element={<SingilePhoto />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
