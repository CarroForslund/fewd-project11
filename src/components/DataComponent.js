import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../data/config.js';
import PhotoContainer from './components/PhotoContainer';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

class DataComponent extends Component {

  constructor(){
    super();
    this.state = {
      tag: '',
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
          tag: tag,
          photos: response.data.photos,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render(){
    return(
      {
        (this.state.loading)
         ? <p>Loading...</p>
         :
         <Switch>
           <Route exact path="/" render={(routeProps) => ( <PhotoContainer data={this.state} />)} />
           <Route path="/cats" render={(routeProps) => ( <PhotoContainer data={this.state} />)} />
           <Route path="/coffee" render={(routeProps) => ( <PhotoContainer data={this.state} />)} />
           <Route path="/computers" render={(routeProps) => ( <PhotoContainer data={this.state} />)} />
         </Switch>
      }

    );

  }

}

export default DataComponent;
