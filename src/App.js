import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import websiteHeader from '/Users/tar845/bloc/bloc-jams-react/src/assets/images/websiteHeader/websiteHeader_6.jpg';

class App extends Component {
  
  render() {
    
    return (
      
      <div className = "App">
        <header>
            <img className="websiteHeader" src={websiteHeader} alt="websiteHeader"/>
            <div className = "nav">
              <nav>
                <div className = "links a">
                  <Link to = "/"> LANDING </Link>
                  <Link to = "/library"> LIBRARY </Link>
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
