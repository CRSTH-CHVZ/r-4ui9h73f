import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            str: '',
        }
    }
    handlerOnChange = (e) => {
        const value = e.target.value
        console.log(value)
        this.setState({
            str: value
        });
    };


  render() {
    return (
      <div>
        <h1>Un repetidor</h1>
        <input type="text" placeholder="Empieza a escribir algo"  onChange={ this.handlerOnChange}/>
        <p className="repeater">{this.state.str}</p>
      </div>
    );
  }
}

export default App;
