import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import NameTag from '../components/NameTag'


import Test from '../components/Test';
import BookListAppTitle from '../components/BookListAppTitle';


class App extends Component {
  render() {
    return (
      <div className="App">
         <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> 
         <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <NameTag name="Matt"/>

        <Test title=""/>
        

      </div>
    );
  }
}

export default App;
