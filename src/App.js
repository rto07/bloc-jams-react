import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
import websiteHeader from './websiteHeader/websiteHeader_6.jpg';
import Main from './components/Main';
import MenuItem from './components/MenuItem';
import Menu from './components/Menu';
import MenuButton from './components/MenuButton';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      menuOpen:false,
    }
  }

  handleMenuClick(){
    this.setState({menuOpen:!this.state.menuOpen})
  }

  handleLinkClick(){
    this.setState({menuOpen:false});
  }

  render() {
    const styles= 
      {
        container:{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: '99',
          opacity: 0.9,
          display:'flex',
          alignItems:'center',
          background: 'black',
          width: '100%',
          color: 'white',
          fontFamily:'Lobster',
        },

        body: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100vw',
          height: '100vh',
          filter: this.state.menuOpen ? 'blur(2px)':null,
          transition: 'filter 0.5s ease',
        },
      }
    const menu = ['Home','Library']
    const menuItems = menu.map((val,index)=>{
       return (
          <MenuItem 
            key={index} 
            delay={`${index * 0.1}s`}
            onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
      });

      return(
      
      <div className = "App">
      
        <header>
        <div id='root'></div>
            <img className="websiteHeader" src={websiteHeader} alt="websiteHeader"/>
            <div>
              <nav>
              <div>
        <div style={styles.container}>
          <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
        </div>
        <Menu open={this.state.menuOpen}>
          {menuItems}
        </Menu>
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