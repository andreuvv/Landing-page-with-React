import React from 'react';
import logo from '../img/logo.svg';
import './App.css';
import CardDeck from './CardDeck';
import NavBar from './NavBar';
import Jumbo from './Jumbo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Jumbo/>
        <CardDeck/>
      </header>
    </div>
  );
}

export default App;
