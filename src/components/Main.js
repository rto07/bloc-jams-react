import React, { Component } from 'react';

class Main extends React.Component {
    render(){
      const styles = {
        main: {
          display:'flex',
          flexDirection:'column',
          alignItems: 'center',
          height: '100vh',
        }
      }
      
      return (
        <div style={styles.main}>
        </div>
      )
    }
  }
  
  export default Main;