import React, { Component } from "react";
import Map from './Map.js';
import Hangman from './Hangman.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        
        <h1>Extinction</h1>
        <Hangman/>
      </div>
      
    );
  }
}


export default App;

