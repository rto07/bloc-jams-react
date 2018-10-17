import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  
  render() {
    
    return (
      
      <div className = "App">
      
        <header>
          <nav>
            <Link to = "/"> Landing </Link>
            <Link to = "/library"> Library </Link>
          </nav>

          <h1>Bloc Jams</h1>

        </header>
<<<<<<< HEAD
       
=======
>>>>>>> ab98efc96cb5d7f493487a398e56295e0bfb6937
      </div>
    );
  }
}

export default App;