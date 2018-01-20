import axios from 'axios';
import apiKey from '../config.js';

export default (tag = 'cats') => {
  return axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tag}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      return response.data.photos.photo;
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
}
