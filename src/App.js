import React from 'react';
import { Grid } from '@material-ui/core';
import PianoTile from './PianoTile';


function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, ...("abcdefghijklmnopqrstuvwxyz").toUpperCase().split("")]

  return (
    <Grid container justify='center' alignItems='center' style={{height : '100vh'}}>
      <Grid item xs={10}>
        <Grid container justify='center'>
          {arr.map((x, i) => {
            return (
              <Grid key={i} item xs={1} style={{padding : 10}}>
                <PianoTile tileName={x} />
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
