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
      flexWrap: 'wrap',
      flexDirection: 'row'
    }
    const buttonStyle = {

      width: '50%',
      height: '100%',

      backgroundColor: '#C0CA33',
      fontSize: '5em'
    };
    const counterStyle = {

      width: '50%',
      height: '100%',
      backgroundColor: 'teal',
      fontSize: '2em'
    };
    const dateStyle = {
      fontSize: '1em'
    }
    return (
      <div className = "App" >
        <div className = "container">

          <div onClick = {this.counter} style = { buttonStyle } > { this.state.count } </div>
          <div onClick = {this.start} style = {counterStyle}>

            start <p style = {dateStyle}>{((Date.now() - this.state.date)/100).toFixed(0)}</p>
        </div>
        </div>

      </div >
      );
  }
}

export default App;
