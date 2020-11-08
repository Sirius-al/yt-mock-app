import React, { Component } from 'react';

import SearchBar from './SearchBar/SearchBar'
import youtube from '../apis/yt'
import VideoLists from './videoList/VideoLists';
import VideoMainScreen from './video_mainScreen/VideoMainScreen'

class App extends Component {

    state = {videos: [], selectedVideo: null}

    onTermSubmit = async (term) => {

        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})

    };

    onVideoSelect = (video) => {
        // console.log(`form App`, video)
        this.setState({selectedVideo: video})
    } 


    componentDidMount() {
        this.onTermSubmit('What is React js')
    }

    render() {
        return (
          <div className="ui container">
            <SearchBar
              placeholder="Ex: what is React"
              onTermSubmit={this.onTermSubmit}
            />
            <div className="ui grid">
              <div className="ui row">
                <div className="eleven wide column" >
                    <VideoMainScreen video={this.state.selectedVideo} />
                </div>
                <div className="five wide column" >
                    <VideoLists
                    onVideoSelect={this.onVideoSelect}
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
