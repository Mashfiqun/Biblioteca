import React from 'react';
import './App.css';
import { Navbar } from './layouts/navbar-footer/Navbar';
import { ExploreTopBooks } from './layouts/home/ExploreTopBooks';
import { Carousel } from './layouts/home/Carousel';
import { Heros } from './layouts/home/Heros';
import { LibraryServices } from './layouts/home/LibraryServices';
function App() {
  return (
    <div>
      <Navbar />
      <ExploreTopBooks />
      <Carousel />
      <Heros />
      <LibraryServices />
    </div>
  );
}

export default App;
