import React from 'react';
import GuineaPig from '../shorts/guineapig/GuineaPig';
import Rabbit from '../shorts/rabbit/Rabbit';
import Hamster from '../shorts/hamster/Hamster';
import Parrot from '../shorts/parrot/Parrot';

function Mainpage() {
  return (
    <div>
        <GuineaPig />
        <Rabbit />
        <Hamster/>
        <Parrot/>
    </div>
  )
}

export default Mainpage;