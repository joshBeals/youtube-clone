import './App.css';
import youtube from '../api/youtube';
import React from 'react';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';

class App extends React.Component {

    state = { data: [], video: [] };

    componentDidMount = async() =>{
        this.onSearchSubmit('curry');
    }

    changeSelectedVideo = video => {
        this.setState({ video: video });
    }

    onSearchSubmit = async (term) => {
        
        const response = await youtube.get('/search', {
            params: { q: term }
        });

        this.setState({ data: response.data.items, video: response.data.items[0] });
    }

    render(){
        return(
            <div className=''>
                <Navbar onSubmit={this.onSearchSubmit} />
                <div className='d-flex justify-content-center col-12'>
                    <Content videos={this.state.data} selectedVideo={this.state.video} changeVideo={this.changeSelectedVideo} />
                </div>
            </div>
        );
    }
}

export default App;