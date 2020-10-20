import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div
      onClick={() => {
        onVideoSelect(video);
      }}
      className="video-item item"
      style={{
        marginTop: "15px",
        border: "3px solid #696969",
        width: "100%",
        borderRadius: "5px",
      }}
    >
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header ui fluid container">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
