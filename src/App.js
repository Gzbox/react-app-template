import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header, Main } from './components'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
