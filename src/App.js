import React, { Component } from 'react';
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import axios from 'axios';
import apiKey from './data/config.js';

import {
  BrowserRouter,
} from 'react-router-dom';

class App extends Component {

  constructor(){
    super();
    this.state = {
      // tag: '',
      photos: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (tag = 'cats') => {

    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          // tag: tag,
          photos: response.data.photos,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }


  render() {
    return (
      <BrowserRouter>
        <div className="container">

          <Search onSearch={this.performSearch} />
          {/*<Nav tag={this.state.tag} />*/}
          <Nav onClick={this.performSearch}/>

          {
            (this.state.loading)
             ? <p>Loading...</p>
             // : <PhotoContainer data={this.state.photos} tag={this.state.tag} />
             : <PhotoContainer data={this.state.photos} />
          }

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
