import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config.js';

export default class FetchData extends Component {

  constructor(props){
    super(props);
    this.performSearch = this.performSearch.bind(this);
  }

  handleUpVote() {
    this.props.onVote(this.props.id);
  }

  componentDidMount(){
    this.performSearch();
  }


  performSearch = (tag = 'cats') => {
    console.log('Hello performSearch in FetchData');
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
}
