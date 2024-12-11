import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Team from './pages/Team';
import About from './pages/About';
import Whyus from './pages/Whyus';
import Services from './pages/Services';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact';
import ServiceDetails from './pages/ServiceDetails';
import Dashboard from './pages/Dashboard';
import Customers from './pages/Customers';
import Login from './components/Login';
import Register from './components/Register';
import Error from './pages/Error';







const App = () => {
  return (
    
      <Router>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/whyus" element={<Whyus />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<Error />} />

          
      
        </Routes>
        <Footer /> 
      </Router>
     
  );
};

export default App;
