import React, { Component } from 'react';
import Header from '../src/components/Header/Header';
import Search from '../src/components/Search/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;
