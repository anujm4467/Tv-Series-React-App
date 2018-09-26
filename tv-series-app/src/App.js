import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro/index'

//const Intro = (parops)=> (  <p className="App-intro"> Our first Functional Component. </p>)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Tv-Series-Website</h1>
        </header>
        <Intro  message =" here you can find out your fav. web series." />
      </div>
    );
  }
}

export default App;
