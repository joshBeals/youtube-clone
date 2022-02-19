import React from 'react';
import Spinner from '../Spinner';
import VideoList from './VideoList';
import Video from './Video';

const Content = props => {
    console.log(props.videos[0]);
    if(props.videos == ''){
        return(
            <Spinner />
        );
    }

    return(
        <div className='container-fluid row mt-5 text-white'>
            <div className='col-lg-8'>
                <Video video={props.selectedVideo} />
            </div>
            <div className='col-lg-4'>
                <VideoList videos={props.videos} newVideo={props.changeVideo} /> 
            </div>
        </div>
    );
};

export default Content;