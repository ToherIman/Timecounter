import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 0,
      count: 0,
      timePassed: Date.now(),
    };

  };
  counter = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  start = () => {
    this.setState({date: new Date()});
    this.setState({count: 0});
  }


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
        {((Date.now() - this.state.date)/100).toFixed(0)} sec
        </div>
        </div>

      </div >
      );
  }
}

export default App;
