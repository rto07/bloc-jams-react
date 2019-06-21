import React, { Component } from 'react';

class Menu extends React.Component {
    constructor(props){
      super(props);
      this.state={
        open: this.props.open? this.props.open:false,
      }
    }
      
    componentWillReceiveProps(nextProps){
      if(nextProps.open !== this.state.open){
        this.setState({open:nextProps.open});
      }
    }
    
    render(){
      const styles={
        container: {
          position: 'fixed',
          top: 0,
          left: 0,
          height: this.state.open? '25%': 0,
          width: '25vw',
          display: 'flex',
          flexDirection: 'column',
          background: 'black',
          opacity: 0.9,
          color: '#fafafa',
          transition: 'height 0.3s ease',
          zIndex: 2,
        },
        menuList: {
          padding: '3rem 3rem 3rem 4.5rem ',
        }
      }
      return(
        <div style={styles.container}>
          {
            this.state.open?
              <div style={styles.menuList}>
                {this.props.children}
              </div>:null
          }
        </div>
      )
    }
  }

  export default Menu;