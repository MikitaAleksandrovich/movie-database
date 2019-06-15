import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { isExportNamedDeclaration, isImportNamespaceSpecifier } from '@babel/types';

class App extends Component {

  state = {
    toggle: true
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <Welcome text="Welcome to Using Props" toggle = {this.state.toggle} />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.toggle && // if toggle = true then display this <p> (inline conditional)
          <p>This should show and toggle</p>
        }
        <button onClick={this.toggle}>Show / Hide</button>
        {this.state.toggle && // if toggle = true then display this <p> (inline conditional)
          <p>Here is another text to dissapear</p>
        }
      </div>
    );
  }
}

class Welcome extends Component {
  render() {
    const { text, toggle } = this.props;
    console.log(toggle);
    return (
      <div>
        {toggle && 
          <p>Hello!</p>
        }
      <h1 className="App-title">{text}</h1>
      </div>
    );
  } 
}


export default App;


