import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Style from './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
<<<<<<< Updated upstream
=======
import websiteHeader from './websiteHeader/websiteHeader_6.jpg';

>>>>>>> Stashed changes

class App extends Component {
  
  render() {
    
    return (
      
      <div className = "App">
      
        <header>
<<<<<<< Updated upstream
          <nav>
            <Link to = "/"> Landing </Link>
            <Link to = "/library"> Library </Link>
          </nav>

          <h1>Bloc Jams</h1>

        </header>
=======
            <img className="websiteHeader" src={websiteHeader} alt="websiteHeader"/>
            <div className = "nav">
              <nav>
                <div className = "links a">
                  <Link to = "/"> HOME </Link>
                  <Link to = "/library"> LIBRARY </Link>
                </div>
              </nav>
            </div>
          </header>
>>>>>>> Stashed changes

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