import React from 'react';
import Spinner from '../Spinner';
import VideoList from './VideoList';
import Video from './Video';

const Content = ({ videos, selectedVideo, changeVideo }) => {
    
    if(videos == ''){
        return(
            <Spinner />
        );
    }

    return(
        <div className='container-fluid row mt-5 text-white'>
            <div className='col-lg-8'>
                <Video video={selectedVideo} />
            </div>
            <div className='col-lg-4'>
                <VideoList videos={videos} newVideo={changeVideo} /> 
            </div>
        </div>
    );
};

export default Content;