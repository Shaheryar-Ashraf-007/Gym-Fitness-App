// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/page';
import Home from './components/home/page';
import Benefits from './components/benefits/page';
import Classes from './components/ourClasses/page';
import Contact from './components/contact/page';
import SignIn from './signin/page';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Benefits/>
      <Classes/>
      <Contact/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/benefits" element={<Benefits/>} />
        <Route path="/ourClasses" element={<Classes/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signin" element={<SignIn/>} />
      </Routes>
      </Router>
      
  );
};

export default App;