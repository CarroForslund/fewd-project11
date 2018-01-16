import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config'
import PhotoContainer from './PhotoContainer';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

export default class FetchPhotos extends Component {

  constructor(props){
    super(props);
    this.state = {
      tag: '',
      photos: [],
      loading: true
    };
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData = (tag = 'cats') => {

    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        console.log(response.data.photos);
        this.setState({
          tag: tag,
          photos: response.data.photos,
          loading: false
        });
        console.log(this.state);
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  // <Route exact path={`/this.state.tag`} render={ () => <PhotoContainer tag={this.state.tag} data={this.state.photos} /> } />


  render(){
    return(
      (this.state.loading)
        ? <p>Loading...</p>
        : <PhotoContainer tag={this.state.tag} data={this.state.photos} />
    );
  }

}
