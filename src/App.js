import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Today from './Today';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <div>
        <Welcome name="Nicole" />
        <Today date={new Date().toLocaleTimeString()} />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default App;
