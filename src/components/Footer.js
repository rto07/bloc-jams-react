// import React, { Component } from 'react';


// function Footer(props) {
//     const styles = {
//       footer: {
//         position: 'absolute',
//         bottom: 0,
//         width: '100%',
//         marginTop: '1rem',
//         display:'flex',
//         flexDirection:'column',
//         justifyContent:'center',
//         alignItems:'center',
//         color: props.color,
//       },
//       line: {
//         height:'1px',
//         width:'90%',
//         background: props.color,
//       },
//       text: {
//         padding: '0.5rem',
//       }
//     }  
    
//     return (
//       <div style={styles.footer}>
//         <div style={styles.line}>
//         </div>
//         <div style={styles.text}>{props.title} created by Smashcat &copy; 2017
//         </div>
//       </div>
//     )
//   }
  
//   Footer.defaultProps = {
//     color: 'black',
//     title: 'hello world!'
//   }
  
//   Footer.propTypes = {
//     color: React.PropTypes.string,
//     title: React.PropTypes.string,
//   }
//   export default Footer;