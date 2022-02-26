import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, newVideo }) => {
    
    const newVideos = videos.map(video => {
        return(
            <VideoItem key={video.etag} video={video} newVideo={newVideo} />
        );
    });

    return(
        <div>
            {newVideos}
        </div>
    );
};

export default VideoList;