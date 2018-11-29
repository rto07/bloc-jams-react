import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import websiteHeader_1 from '../build/assets/images/websiteHeader/websiteHeader_1.jpg';
import websiteHeader_2 from '../build/assets/images/websiteHeader/websiteHeader_2.jpg';

class App extends Component {
  
  render() {
    
    return (
      
      <div className = "App">
      
        <header>

          <h1>
            <img className="websiteHeader_1" src={websiteHeader_1} width="1015" alt="websiteHeader_1"/>
          </h1>

        <div className = "nav">
          <nav>
            <div className = "links a">
              <Link to = "/"> Landing </Link>
              <Link to = "/library"> Library </Link>
            </div>
          </nav>
        </div>

        </header>

        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
         
        </main>

      </div>
    );
  }
}

export default App;
