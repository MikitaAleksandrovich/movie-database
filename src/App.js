import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { isExportNamedDeclaration, isImportNamespaceSpecifier } from '@babel/types';

class App extends Component {

  state = {
    input: ''
  }

  submit = () => {
    console.log(this.text.value);
  }

  inputedValue = (event) => {
    this.setState({
      input: event.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <Welcome text="Welcome to Using Props" />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>{this.state.input}</h3>
        <input type="text" onChange={this.inputedValue} value={this.state.input}></input>
        <input type="text" ref={(input) => this.text = input}></input>
        <button onClick={this.submit}>Show Value</button>
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text } = this.props;
    return (
      <div>
      <h1 className="App-title">{text}</h1>
      </div>
    );
  } 
}


export default App;


