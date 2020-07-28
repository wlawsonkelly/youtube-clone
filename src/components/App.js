import React from 'react';
import SearchBar from './SearchBar';
import YouTube from '../apis/YouTube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
//i love react
class App extends React.Component {
    state = {vidios: [], selectedVideo: null };

    componentDidMount() {
       this.onTermSubmit('dogs')
    }

    onVideoSelect = (video) => {
       this.setState({selectedVideo: video});
    };


    onTermSubmit = async (term) => {
       const response = await YouTube.get('/search',{
            params: {
                q: term
            }
        });
        this.setState({
            vidios: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };


    render() {
        return (
        <div className = "ui containter">
        <br />
        <h1 style ={{color: 'red'}}>YouTube</h1>
            <SearchBar onFormSubmit={this.onTermSubmit}/>
        <div className = "ui grid">
            <div className = "ui row">
                <div className = "eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
                 </div>
                <div className = "five wide column">
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.vidios}/>
                </div>
            </div>
         </div>
        </div>
        );
    }
}

export default App;