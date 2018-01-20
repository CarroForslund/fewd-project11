import React, { Component } from 'react';
import Search from './components/Search';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import PhotoContainer from './components/PhotoContainer';
import FetchData from './components/FetchData';
import axios from 'axios';
import apiKey from './config.js';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

class App extends Component {

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


  render() {
    return (
      <BrowserRouter>
        <div className="container">

          <Search onSearch={this.performSearch} />
          <Route component={Nav} />

          {
            (this.state.loading)
             ? <p>Loading...</p>
             :
             <Switch>

               <Route exact path="/" render={ () => ( <Redirect to="/cats" /> )} />
               <Route path="/cats" render={ () => ( <PhotoContainer data={this.state} />)} />
               <Route path="/coffee" render={ () => ( <PhotoContainer data={this.state} />)} />
               <Route path="/computers" render={ () => ( <PhotoContainer data={this.state} />)} />
               <Route component={NotFound} />

             </Switch>
          }

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
