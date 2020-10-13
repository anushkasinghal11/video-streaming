import React from "react";
import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItem";

function VideoList ({ videos, onVideoSelect }) {
  const listOfVideos = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
      <div>
    <Grid container spacing={10}>
      {listOfVideos}
    </Grid>
    </div>
  );
}
export default VideoList;