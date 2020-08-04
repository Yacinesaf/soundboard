import React from 'react';
import { Button } from '@material-ui/core';
import sound1 from './assets/sound1.wav'
import sound2 from './assets/sound2.wav'
import sound3 from './assets/sound3.wav'
import sound4 from './assets/sound4.wav'
import sound5 from './assets/sound5.wav'
import sound6 from './assets/sound6.wav'
import sound7 from './assets/sound7.wav'
import sound8 from './assets/sound8.wav'
import sound9 from './assets/sound9.wav'
import soundA from './assets/soundA.wav'
import soundB from './assets/soundB.wav'
import soundC from './assets/soundC.wav'
import soundD from './assets/soundD.wav'
import soundE from './assets/soundE.wav'
import soundF from './assets/soundF.wav'
import soundG from './assets/soundG.wav'
import soundH from './assets/soundH.wav'
import soundI from './assets/soundI.wav'
import soundJ from './assets/soundJ.wav'
import soundK from './assets/soundK.wav'
import soundL from './assets/soundL.wav'
import soundM from './assets/soundM.wav'
import soundN from './assets/soundN.wav'
import soundO from './assets/soundO.wav'
import soundP from './assets/soundP.wav'
import soundQ from './assets/soundQ.wav'
import soundR from './assets/soundR.wav'
import soundS from './assets/soundS.wav'
import soundT from './assets/soundT.wav'
import soundU from './assets/soundU.wav'
import soundV from './assets/soundV.wav'
import soundW from './assets/soundW.wav'
import soundX from './assets/soundX.wav'
import soundY from './assets/soundY.wav'
import soundZ from './assets/soundZ.wav'


function PianoTile({ tileName }) {
  function play() {
    console.log(tileName);
    var audios = document.getElementById("audio");
    audios.play();
  }

  const obj = {
    sound1: sound1,
    sound2: sound2,
    sound3: sound3,
    sound4: sound4,
    sound5: sound5,
    sound6: sound6,
    sound7: sound7,
    sound8: sound8,
    sound9: sound9,
    soundA: soundA,
    soundB: soundB,
    soundC: soundC,
    soundD: soundD,
    soundE: soundE,
    soundF: soundF,
    soundG: soundG,
    soundH: soundH,
    soundI: soundI,
    soundJ: soundJ,
    soundK: soundK,
    soundL: soundL,
    soundM: soundM,
    soundN: soundN,
    soundO: soundO,
    soundP: soundP,
    soundQ: soundQ,
    soundR: soundR,
    soundS: soundS,
    soundT: soundT,
    soundU: soundU,
    soundV: soundV,
    soundW: soundW,
    soundX: soundX,
    soundY: soundY,
    soundZ: soundZ,

  }
  return (
    <div>
      <audio id='audio' >
        <source type='audio/wav' src={obj[`sound${tileName}`]} />
      </audio>
      <Button onClick={play} style={{ padding: 15, border: '2px solid grey', borderRadius: 5 }}>
        {tileName}
      </Button>
    </div>

  );
}

export default PianoTile;