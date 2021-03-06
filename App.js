import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Header from './Header';
import Picture from './Picture';
import Welcome from './Welcome';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">jom</h1>
        </header>
        <Header />
        <Picture />
        <Welcome />
      </div>
      
    );
  }
}

export default App;
