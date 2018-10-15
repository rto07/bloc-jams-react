import React, { Component } from 'react';
import {Router, Link} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';

class App extends Component {
  
  render() {
    
    return (
      
      <div className = "App">
      
        <header>
          <h1>Bloc Jams</h1>
        </header>
       
        <main>
          <exact path = "/" component = {Landing}/>;
          <exact path = "/library" component = {Library}
        </main>
      
      </div>
    );
  }
}

export default App;