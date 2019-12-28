import axios from 'axios';

const KEY = 'AIzaSyALp0pDdoAFgKLh8dNd5x5ZX61CfyGj7g4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: KEY
  }
});
