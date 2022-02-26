import React from 'react';

const Video = ({ video }) => {
    
    if(!video || video.length == 0){
        return(
            <div>No video</div>
        );
    }

    return(
        <div className="d-flex flex-column">
            <iframe style={{ width: '100%', height: '60vh' }} src={`https://youtube.com/embed/${video.id.videoId}`} />
            <div className='mt-5'>
                <h5>{video.snippet.title}</h5>
                <h6>{video.snippet.description}</h6>
                <p><span style={{ color: 'gray' }}>{video.snippet.channelTitle} <br /> {video.snippet.publishedAt}</span></p>
            </div>
        </div>
    );
};

export default Video