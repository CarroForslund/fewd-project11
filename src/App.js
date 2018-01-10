import React, { Component } from 'react';
import Search from './components/Search';
import Nav from './components/Nav';
import Container from './components/Container';

import {
  BrowserRouter,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">

          <Search />
          <Nav />
          <Container />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
