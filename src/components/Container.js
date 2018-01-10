import React from 'react';
import Result from './Result';
import Cats from './Cats';
import Coffee from './Coffee';
import Computers from './Computers';

import {
  Route,
  Switch
} from 'react-router-dom';

const Container = () => (
  <div className="photo-container">
    <h2>Results</h2>
    <Switch>
      <Route exact path="/" component={Result} />
      <Route path="/cats" component={Cats} />
      <Route path="/coffee" component={Coffee} />
      <Route path="/computers" component={Computers} />
    </Switch>
  </div>
);

export default Container;
