import React from 'react';
import Result from './Result';
import Cats from './Cats';
import Coffee from './Coffee';
import Computers from './Computers';
import Photo from './Photo';

import {
  Route,
  Switch
} from 'react-router-dom';

const PhotoContainer = (props) => {

  const results = props.data.photo;
  const tag = props.tag;
  console.log('tag in container', tag);
  let photos;
  console.log('results', results);

  photos = results.map(photo =>
    <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} title={photo.title} key={photo.id} />
  );

  return(
    <div className="photo-container">
      <Switch>
        <Route exact path="/" component={Result} />
        <Route path="/cats" component={Cats} />
        <Route path="/coffee" component={Coffee} />
        <Route path="/computers" component={Computers} />
        // <Route exact path="/" render={(routeProps) => ( <Result {...routeProps} {...props} />)} />
        // <Route path="/cats" render={(routeProps) => ( <Cats {...routeProps} {...props} />)} />
        // <Route path="/coffee" render={(routeProps) => ( <Coffee {...routeProps} {...props} />)} />
        // <Route path="/computers" render={(routeProps) => ( <Computers {...routeProps} {...props} />)} />
      </Switch>
      <ul>
        {photos}
      </ul>
    </div>
  );
}



export default PhotoContainer;
