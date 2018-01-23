import React from 'react';
import Photo from './Photo';
import FetchData from './FetchData';
import NotFound from './NotFound';

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
    // let result;
    //
    // if (!this.state.photos.length === 0) {
    //   result = this.state.photos.map(photo =>
    //             <Photo
    //               url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
    //               title={photo.title}
    //               key={photo.id}
    //             />
    //           );
    // }
    // else {
    //   result = <NotFound />;
    // }

    // Check if state.loading === true,
    // if so, show loading, otherwise, show the photos.
    if (this.state.loading) {
      return <p>Loading...</p>;
    } else {
      //If valid search tag return Photo
      //Else return NotFound
      return (
        <div className="photo-container">
          <h2>{tag}</h2>
          <ul>
            {
              // result
              this.state.photos.map(photo =>
                <Photo
                  url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                  title={photo.title}
                  key={photo.id}
                />
              )
            }
          </ul>
        </div>
      );
    }
  }
}

export default PhotoContainer;
