import React from 'react';
import './App.css';
import { Navbar } from './layouts/navbar-footer/Navbar';
import { Footer } from './layouts/navbar-footer/Footer';
import { HomePage } from './layouts/home/HomePage';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';
export const App = () => {
  return (
    <div>
      <Navbar />
      {/*<HomePage />*/}
      <SearchBooksPage />
      <Footer />
    </div>
  );
}
