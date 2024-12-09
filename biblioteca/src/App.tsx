import React from 'react';
import './App.css';
import { Navbar } from './layouts/navbar-footer/Navbar';
import { Footer } from './layouts/navbar-footer/Footer';
import { HomePage } from './layouts/home/HomePage';
export const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
