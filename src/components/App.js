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
      </header>
      <div className="App-body">
        <Jumbo/>
        <CardDeck/>
      </div>
    </div>
  );
}

export default App;
