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
  const tag = props.data.tag;
  console.log(tag);
  const results = props.data.photos.photo;
  let photos;

  photos = results.map(photo =>
    <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} title={photo.title} key={photo.id} />
  );

  return(
    <div className="photo-container">
      <h2>{tag}</h2>
      <ul>
        {photos}
      </ul>
    </div>
  );
}



export default PhotoContainer;
