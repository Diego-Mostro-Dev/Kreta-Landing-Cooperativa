import React, { useState } from "react";
import "../assets/css/video.css";

export default function Video({ videoId }) {
  const [loaded, setLoaded] = useState(false);

  const thumbnail = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="video-container">
      {!loaded ? (
        <div className="video-preview" onClick={() => setLoaded(true)}>
          <img
            src={thumbnail}
            alt="Video preview"
            className="video-thumbnail"
          />
          <div className="video-play-button">▶</div>
        </div>
      ) : (
        <iframe
          title="video"
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&loop=1&rel=0`}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
