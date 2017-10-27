import React from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './component/search_bar';
import VideoList from './component/video_list';
import VideoDetail from './component/video_detail';
const API_KEY = 'AIzaSyBddB6ouvk_--o4m8rD0uuzuOh07OakqEg';




class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
       
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (data) => {
            this.setState({
                videos: data,
                selectedVideo: data[0]
            });
        });

    }

    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 500)

        return(
            <div>
                <SearchBar onTermChange={videoSearch}></SearchBar>
                <VideoDetail video={this.state.selectedVideo}></VideoDetail>
                <VideoList
                    onVideoSelect ={selectedVideo => this.setState({selectedVideo : selectedVideo})}
                    videos={this.state.videos}></VideoList>
            </div>
        )
    }
}

ReactDOM.render(
    <App></App>, document.getElementById('app')
)
