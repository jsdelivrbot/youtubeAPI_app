import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './component/search_bar';
const API_KEY = 'AIzaSyAMtJrq_9IQScQawmYQO4BhYOnsrIGJ1Fs';
const App =  () => {
    return <div><SearchBar></SearchBar></div>
}

ReactDOM.render(
    <App></App>, document.getElementById('app')
)
