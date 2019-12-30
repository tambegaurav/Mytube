import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.onTermSubmit('bmw');
  }
  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: { q: term }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui equal width grid">
          <div className="ui row">
            <div className="fifteen wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="twelve wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect.bind(this)}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// AIzaSyALp0pDdoAFgKLh8dNd5x5ZX61CfyGj7g4
