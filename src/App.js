import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import PhotoContainer from './components/PhotoContainer';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          {/* On Search:
            - update route to /search/:tag
            - pass input value to PhotoContainer as "tag" and render PhotoContainer */}
          <Route path="/search" render={ () => <SearchForm onSearch={""} /> } />
          <Nav />
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/cats" /> } />
            <Route path="/cats" render={ () => <PhotoContainer tag="cats" /> } />
            <Route path="/coffee" render={ () => <PhotoContainer tag="coffee" /> } />
            <Route path="/computers" render={ () => <PhotoContainer tag="computers" /> } />
            {/*<Route path="/search/:tag" render={ () => ( <PhotoContainer tag={:tag} />)} />*/}
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
