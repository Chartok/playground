import './App.css';
import React, { useState } from 'react';
import logo from './logo.svg';

import Header from './components/Header';

export default function App() {
  const [ activeSection, setActiveSection ] = useState( 'home' );
  const handleSectionChange = ( section ) => {
    setActiveSection( section );
  };
  return (
    <div className="App">
      <Header activeSection={activeSection} onSectionChange={handleSectionChange} className="App-header" />
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
};
