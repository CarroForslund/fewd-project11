import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './data/config.js';

import DataComponent from './components/DataComponent';
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">

          <Search onSearch={this.performSearch} />
          <Route component={Nav} />

          <DataComponent />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
