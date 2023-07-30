import React from 'react'
import '../styles/App.css';
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Top from './Top';
import Contact from './Contact';

const App = () => {

  return (
    <div id="main">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/top-10" component={Top} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
