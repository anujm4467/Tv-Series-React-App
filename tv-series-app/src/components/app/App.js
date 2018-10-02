import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro/index';
import 'whatwg-fetch';
import Series from '../../container/series/index';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Tv-Series-Website</h1>
        </header>
        <Intro  message =" here you can find out your fav. web series." />
        
        <Series />
      </div>
    );
  }
}

export default App;
