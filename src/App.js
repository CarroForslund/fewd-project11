import React, { Component } from 'react';
import Search from './components/Search';
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
          <Route component={Search} />
          <Route component={Nav} />
          <Switch>
            <Route exact path="/" render={ () => ( <Redirect to="/cat" /> )} />
            <Route path="/cat" render={ () => ( <PhotoContainer tag="cat" />)} />
            <Route path="/coffee" render={ () => ( <PhotoContainer tag="coffee" />)} />
            <Route path="/computer" render={ () => ( <PhotoContainer tag="computer" />)} />
            <Route path="/:tag" component={PhotoContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
