import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const [qualityOptions, setQualityOptions] = useState([]);
  const [selectedQuality, setSelectedQuality] = useState('');

  useEffect(() => {
    const initializePlayer = () => {
      if (videoRef.current) {
        if (Hls.isSupported()) {
          const hls = new Hls();
          hls.loadSource(videoUrl);
          hls.attachMedia(videoRef.current);
          hls.on(Hls.Events.MANIFEST_PARSED, function () {
            setQualityOptions(hls.levels);
            setSelectedQuality(hls.currentLevel);
            console.log(hls.currentLevel)
          });
          videoRef.current.play();
        }
      }
    };

    initializePlayer();
  }, [videoUrl]);

  const handleQualityChange = (event) => {
    const selectedQualityIndex = parseInt(event.target.value);
    if (!isNaN(selectedQualityIndex)) {
      videoRef.current.hls.levels.forEach((level, index) => {
        if (index === selectedQualityIndex) {
          videoRef.current.hls.currentLevel = index;
          setSelectedQuality(index);
        }
      });
    }
  };

  return (
    <div>
      <video ref={videoRef} controls poster="your-poster-image.jpg" height={500} width={800}/>


      {qualityOptions.length > 1 && (
        <div>
          <label htmlFor="qualitySelector">Select Video Quality: </label>
          <select
            id="qualitySelector"
            onChange={handleQualityChange}
            value={selectedQuality}
          >
            {qualityOptions.map((option, index) => (
              <option key={index} value={index}>
                {option.height}p
              </option>
            ))}
          </select>
        </div>
      )}


    </div>
  );
};

export default VideoPlayer;
