import './App.css';
import youtube from '../api/youtube';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';

const App = () => {

    const [data, setData] = useState([]);
    const [video, setVideo] = useState(null);
    const [term, setTerm] = useState('');

    useEffect(() => {
        const onSearchSubmit = async () => {
        
            const response = await youtube.get('/search', {
                params: { q: term }
            });

            setData(response.data.items);
            setVideo(response.data.items[0]);
        }
        onSearchSubmit();
    }, [term]);

    const changeSelectedVideo = (video) => {
        setVideo(video);
    }

    return(
        <div className=''>
            <Navbar onSubmit={setTerm} />
            <div className='d-flex justify-content-center col-12'>
                <Content videos={data} selectedVideo={video} changeVideo={changeSelectedVideo} />
            </div>
        </div>
    );

}

export default App;