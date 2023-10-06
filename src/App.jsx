import VideoPlayer from "./VideoPlayer";

import Plyr from "plyr-react"
import "plyr-react/plyr.css"
import { useEffect, useRef } from "react";



// function App() {

//   const plyrProps = {
//     source:{
//       type: 'video',
//       title: 'Example title',
//       sources: [
//         {
//         src: 'https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.360.m3u8',
//         type: 'application/x-mpegURL',
//         size: 360,
//       },
//       ]
//     },
//     options: {
//       controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
//       autoplay: false,
//       volume: 0.5,
//     },
//   }

//   const videoUrl = 'https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.1080.m3u8'; 

//   return (
//     <div className="App">

//       <h1>Hello</h1>

//       <Plyr {...plyrProps} />

    
//       {/* <VideoPlayer videoUrl={videoUrl}/> */}
//     </div>
//   );
// }

// export default App;


import ReactPlayer from 'react-player'
import VideoJS from "./VIdeoJs";


import ShakaPlayer from 'shaka-player-react';
import 'shaka-player-react/dist/controls.css';

function App() {
  
  const videoRef = useRef(null);

  const playerRef = useRef(null);




  const videoJsOptions = {
    
    controls: true,
    
    responsive: true,
    preload:'auto',
    height:500,
    width:900,
    sources: [{
      src: 'https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.1080.m3u8',
      type: 'application/x-mpegURL'
    }]
  };



  const handlePlayerReady = (player) => {
    // playerRef.current = player;

    // You can handle player events here, for example:
    // player.on('waiting', () => {
    //   videojs.log('player is waiting');
    // });

    // player.on('dispose', () => {
    //   videojs.log('player will dispose');
    // });
  };

  useEffect(() => {

    // console.log(videoRef.current)
    // const videoElement = videoRef.current.getInternalPlayer();
    
    // if (videoElement) {
    //   videoElement.currentTime = 100;
    //   videoElement.play();
    //   setTimeout(() => {
    //     videoElement.pause();
    //   }, 100); // Adjust the delay as needed
    // }
  }, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <Plyr {...plyrProps} /> */}
      {/* <ReactPlayer
      controls
      ref={videoRef}     

      url='https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.1080.m3u8' /> */}


      <VideoJS options={videoJsOptions}/>

      {/* <ShakaPlayer autoPlay src="https://www002.vipanicdn.net/streamhls/0789fd4f049c3ca2a49b860ea5d1f456/ep.1.1677591537.1080.m3u8" /> */}

    </div>
  );
}

export default App;