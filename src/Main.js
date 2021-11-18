import React from "react";
import Nav from "./component/nav/Nav";
import Player from "./component/Player/Player";
import Song from "./component/Song/Song";

import AudioTag from "./component/audioTag/AudioTag";
import { useSelector } from "react-redux";
function Main() {
  const libraryIsOpen = useSelector((state) => state.ui.libraryIsOpen);
  return (
    <>
      <div className={`back ${libraryIsOpen ? "active" : ""}`}></div>
      <Nav />
      <Song />
      <Player />
      <AudioTag />
    </>
  );
}

export default Main;
