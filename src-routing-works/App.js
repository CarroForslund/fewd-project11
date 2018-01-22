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
          <Route path="/search" component={Search} />
          <Route component={Nav} />
          <Switch>
            <Route exact path="/" render={ () => ( <Redirect to="/cats" /> )} />
            <Route path="/cats" render={ () => ( <PhotoContainer tag='cats' />)} />
            <Route path="/coffee" render={ () => ( <PhotoContainer tag='coffee' />)} />
            <Route path="/computers" render={ () => ( <PhotoContainer tag='computer' />)} />
            <Route path="/search/:tag" render={ () => ( <PhotoContainer tag='computer' />)} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
