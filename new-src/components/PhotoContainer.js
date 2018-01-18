import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoContainer = (props) => {

  console.log('Hello Photo container');

  const tag = props.tag;
  const results = props.data.photo;
  let photos;

  photos = results.map(photo =>
    <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} title={photo.title} key={photo.id} />
  );

  return(
    <div className="photo-container">
      <h2>{tag}</h2>
      <ul>
        {photos}
        <NotFound />
      </ul>
    </div>
  );

}



export default PhotoContainer;
