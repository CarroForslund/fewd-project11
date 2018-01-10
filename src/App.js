import React, { Component } from 'react';
import Search from './components/Search';
import Nav from './components/Nav';
import Result from './components/Result';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <Nav />
        <Result />
      </div>
    );
  }
}

export default App;
