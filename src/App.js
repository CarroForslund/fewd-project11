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

          <Route path="/search" component={SearchForm} />
          <Route component={Nav} />

          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/cats" /> } />
            <Route path="/cats" render={ () => <PhotoContainer tag="cats" /> } />
            <Route path="/horses" render={ () => <PhotoContainer tag="horses" /> } />
            <Route path="/dogs" render={ () => <PhotoContainer tag="dogs" /> } />

            {/* On search update PhotoContainer with tag from the search query */}
            <Route path="/search/:tag" render={ props => ( <PhotoContainer tag={props.match.params.tag} />)} />
            
            <Route component={NotFound} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
