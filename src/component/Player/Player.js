import React from "react";
import { PlayerStyles } from "./PlayerStyles";

import PlayBtn from "./actionsBtn/PlayBtn";
import PrevBtn from "./actionsBtn/PrevBtn";
import NextBtn from "./actionsBtn/NextBtn";
import Slider from "./Slider/Slider";
import { useSelector } from "react-redux";

function Player() {
  const libraryIsOpen = useSelector((state) => state.ui.libraryIsOpen);
  return (
    <PlayerStyles
      className="center-container lg"
      opened={String(libraryIsOpen)}
    >
      <PrevBtn />
      <Slider />
      <NextBtn />
      <PlayBtn />
    </PlayerStyles>
  );
}

export default Player;
