import React from 'react';
import Video_Item from './video_item';
const VideoList = (props) => {
    const videoItens = props.videos.map((video) => {
        return <Video_Item video={video} />
    });
    return (
        <ul className="col-md-4 list-group ">
            {videoItens}
        </ul>
    );
}
export default VideoList;