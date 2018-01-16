import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../data/config.js';
import PhotoContainer from './PhotoContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
             <Route exact path={this.state.tag} render={(routeProps) => ( <PhotoContainer data={this.state} />)} />
           </Switch>
        }
      );
    }


}

export default DataComponent;
