import React from 'react';
import Result from './Result';
import Cats from './Cats';
import Coffee from './Coffee';
import Computers from './Computers';
import Photo from './Photo';
import FetchData from './FetchData';
import {
  Route,
  Switch
} from 'react-router-dom';

class PhotoContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: true
    };
  }

  loadContent = (tag) => {
    this.setState({
      loading: true
    });
    return FetchData(tag)
    .then((photos) => {
      this.setState({
        photos: photos,
        loading: false
      });
    });
  }

  componentDidMount = () => {
    this.loadContent(this.props.tag);
  }

  // Gets called when a button is clicked.
  // Checking if props are the same.
  // If not it will call loadContent(with new prop)
  componentWillReceiveProps = (nextProps) => {
    const currentTag = this.props.tag;
    const nextTag = nextProps.tag;
    if(currentTag !== nextTag) {
      this.loadContent(nextTag);
    }
  }

  render() {
    const tag = this.props.tag;
    // TODO: Check if state.loading === true,
    // if so, show loading, otherwise, show the photos.
    return (
      <div className="photo-container">
        <h2>{tag}</h2>
        <ul>
          {
            this.state.photos.map(photo =>
              <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} title={photo.title} key={photo.id} />
            )
          }
        </ul>
      </div>
    );
  }
}

export default PhotoContainer;
