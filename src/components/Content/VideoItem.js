import React from 'react';

const VideoItem = ({ video, newVideo }) => {

    const onVideoClick = () => {
        newVideo(video);
    }
    const { snippet } = video;
    return(
        <div onClick={onVideoClick} style={{ cursor: 'pointer' }}>
            <hr />
            <div className='d-flex mb-2' data-bs-toggle="tooltip" data-bs-placement="top" title={snippet.description}>
                <img src={snippet.thumbnails.default.url} />
                <div style={{marginLeft: '10px'}}>
                    <p>{snippet.title}</p>
                    <span style={{ color: 'gray' }}>{snippet.channelTitle} <br /> {snippet.publishedAt}</span>
                </div>
            </div>
        </div>
    );

}

export default VideoItem;