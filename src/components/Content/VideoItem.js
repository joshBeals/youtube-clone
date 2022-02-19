import { render } from '@testing-library/react';
import React from 'react';

class VideoItem extends React.Component {

    onVideoClick = () => {
        this.props.newVideo(this.props.video);
    }

    render(){
        const { snippet } = this.props.video;
        return(
            <div onClick={this.onVideoClick} style={{ cursor: 'pointer' }}>
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
};

export default VideoItem;