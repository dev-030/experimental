import VideoJS from "./VIdeoJs";


function App() {
  
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

  return (
    <div className="App">
    
      <h1>Testing stream api...</h1>

      <VideoJS options={videoJsOptions}/>

    </div>
  );
}

export default App;