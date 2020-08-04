import React from 'react';
import { Button } from '@material-ui/core';



function PianoTile({ tileName, sound }) {
  function play() {
    var audios = document.getElementById("audio");
    audios.play();
  }


  return (
    <div>
      <audio id='audio' >
        <source type='audio/wav' src={sound} />
      </audio>
      <Button onClick={play} style={{ padding: 15, border: '2px solid grey', borderRadius: 5 }}>
        {tileName}
      </Button>
    </div>

  );
}

export default PianoTile;