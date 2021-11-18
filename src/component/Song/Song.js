import React from "react";
import img from "./46.jpg";
import { SongContainer } from "./stylesSong";
import { useSelector } from "react-redux";
function Song() {
  const currentSong = useSelector((state) => state.player.currentSong);
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const libraryIsOpen = useSelector((state) => state.ui.libraryIsOpen);
  return (
    <div className="center-container">
      <SongContainer
        animation={String(!isPlaying)}
        opened={String(libraryIsOpen)}
      >
        <div className="img-container">
          <img src={currentSong?.thumbnial || img} alt="img" />
        </div>
        <h1> {currentSong?.name || "end world it's not Over"}</h1>
        <h3>{currentSong?.artist || "Chriss Brown music"}</h3>
      </SongContainer>
    </div>
  );
}

export default Song;
