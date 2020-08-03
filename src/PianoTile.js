import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import sound1 from './assets/sound1.wav'


function PianoTile({ tileName, audio }) {
  function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }

  const obj = {
    sound1 : sound1
  }
  return (
    // <div>
    //   <audio controls id='audio' >
    //     <source type='audio/wav' src='./assets/sound1.wav' />
    //   </audio>
    //   <Button onClick={play} style={{ padding: 15, border: '2px solid grey', borderRadius: 5 }}>
    //     {tileName}
    //   </Button>
    // </div>
    <audio controls>
      <source src={obj['sound1']} type="audio/wav" />
          Your browser does not support the audio element.
    </audio>

  );
}

export default PianoTile;