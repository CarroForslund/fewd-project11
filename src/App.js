import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import Navigation from './components/Navigation';
import FetchPhotos from './components/FetchPhotos';
import PhotoContainer from './components/PhotoContainer';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <BrowserRouter>

        <div className="container">

          <SearchForm />
          <Navigation />


          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/cats" /> } />
            <Route path="/cats" render={ () => <FetchPhotos tag="Cats"/> } />
            <Route path="/coffee" render={ () => <FetchPhotos tag="Coffee"/> } />
            <Route path="/computers" render={ () => <FetchPhotos tag="Computers"/> } />
          </Switch>

        </div>

      </BrowserRouter>

    );
  }
}

export default App;
