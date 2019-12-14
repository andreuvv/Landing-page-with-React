import React from 'react';
import logo from '../img/logo.svg';
import './App.css';
import CardDeck from './CardDeck';
import NavBar from './NavBar';
import Jumbo from './Jumbo';
import Footer from './Footer';

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
      <footer className="App-footer">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
