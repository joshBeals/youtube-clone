import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    const videos = props.videos.map(video => {
        return(
            <VideoItem key={video.etag} video={video} newVideo={props.newVideo} />
        );
    });

    return(
        <div>
            {videos}
        </div>
    );
};

export default VideoList;