import React from 'react';
import { Grid } from '@material-ui/core';
import PianoTile from './PianoTile';


function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, ...("abcdefghijklmnopqrstuvwxyz").split("")]
  console.log(arr);
  console.log(typeof 2);
  const upperCaseText = (text) => {
    return text.toUpperCase()
  }

  return (
    <Grid container>
      <Grid item xs={10}>
        <Grid container>
          {arr.map((x, i) => {
            return (
              <Grid key={i} item xs={1}>
                <PianoTile tileName={x} audio={typeof x !== 'number' ? `../assets/sound${upperCaseText(x)}.wav` : `../assets/sound${x}.wav`} />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
