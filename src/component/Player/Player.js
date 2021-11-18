import React from "react";
import { PlayerStyles } from "./PlayerStyles";

import PlayBtn from "./actionsBtn/PlayBtn";
import PrevBtn from "./actionsBtn/PrevBtn";
import NextBtn from "./actionsBtn/NextBtn";
import Slider from "./Slider/Slider";

function Player() {
  return (
    <PlayerStyles className="center-container lg">
      <PrevBtn />
      <Slider />
      <NextBtn />
      <PlayBtn />
    </PlayerStyles>
  );
}

export default Player;
