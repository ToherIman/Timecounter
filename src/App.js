import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 0,
      count: 0
    };

  };
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  start = () => {
    this.setState({date: new Date()});
    this.setState({count: 0});
  }

  render() {
    const buttonStyle = {
      width: '100%',
      height: 'auto',
      backgroundColor: 'green',
      border: 'none',
      fontSize: '18em'
    };
    const counterStyle = {
      width: '100%',
      height: 'auto',
      backgroundColor: 'blue',
      border: 'none',
      fontSize: '2em'
    };
    return (
      <div className = "App" >
          <div className = "App-header" >
            <h2> Timer & Counter </h2>
          </div >
        <div style = {counterStyle} > {Date.now() - this.state.date} </div>
        <button onClick = { this.handleClick } style = { buttonStyle } > { this.state.count } </button>
        <button onClick = {this.start} style = {buttonStyle}> Start </button>
      </div >
      );
  }
}

export default App;
