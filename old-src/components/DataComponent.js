import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../data/config.js';
<<<<<<< HEAD
import PhotoContainer from './PhotoContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
=======
import PhotoContainer from './components/PhotoContainer';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
>>>>>>> e78a2a59d44d8289d8d2e7d8a89216a1c2c9a969

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
<<<<<<< HEAD
    this.fetchData();
  }

  fetchData = (tag = 'cats') => {

    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        console.log(response.data.photos);
=======
    this.performSearch();
  }

  performSearch = (tag = 'cats') => {

    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
>>>>>>> e78a2a59d44d8289d8d2e7d8a89216a1c2c9a969
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

<<<<<<< HEAD
    render(){
      return(
        {
          (this.state.loading)
           ? <p>Loading...</p>
           :
           <Switch>
             <Route exact path={this.state.tag} render={(routeProps) => ( <PhotoContainer data={this.state} />)} />
           </Switch>
        }
      );
    }

=======
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
>>>>>>> e78a2a59d44d8289d8d2e7d8a89216a1c2c9a969

}

export default DataComponent;
