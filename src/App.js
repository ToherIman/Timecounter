import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 0,
      count: 0,
      timePassed: 0,
    };

  };
  counter = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  start = () => {
    this.setState({date: Date.now()});
  //  this.setState({count: 0});
  }
  timer = () => {
    this.setState({timePassed: ((Date.now() - this.state.date)/100).toFixed(0)})
  }

  //here to add clock element
  render() {
    const containerStyle = {
      display: 'flex',
      minHeight: '600px',
      alignItems: 'center', /* Vertical center alignment */
      justifyContent: 'center', /* Horizontal center alignment */
    }
    const buttonStyle = {
      verticalAlign: 'middle',
      width: '50%',
      minHeight: '300px',
      backgroundColor: '#C0CA33',
      fontSize: '5em',

    };
    const counterStyle = {
      verticalAlign: 'middle',
      width: '50%',
      minHeight: '300px',
      backgroundColor: 'teal',
      fontSize: '2em'
    };

    return (
      <div className = "App" >
        <div className = "container" style={containerStyle}>

          <div onClick = {this.counter} style = { buttonStyle } > { this.state.count } </div>
          <div onClick = {this.start} style = {counterStyle}>
        {new Date(this.state.date).toLocaleTimeString()} <Clock />
        </div>
        </div>

      </div >
      );

  }
}



export default App;
