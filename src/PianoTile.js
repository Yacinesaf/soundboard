import React from 'react';
import { Button } from '@material-ui/core';

function PianoTile({ tileName, audio }) {
  let sound = new Audio(audio);
  return (
    <Button onClick={() => (
      sound.play()
    )} style={{ padding: 15, border: '2px solid grey', borderRadius: 5 }}>
      <audio autoPlay preload="auto" crossOrigin="anonymous" src={sound} />
      {tileName}
    </Button>
  );
}

export default PianoTile;