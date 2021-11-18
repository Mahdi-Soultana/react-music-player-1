import React from "react";
import img from "./46.jpg";
import { SongContainer } from "./stylesSong";
import { useSelector } from "react-redux";
function Song() {
  const currentSong = useSelector((state) => state.player.currentSong);
  return (
    <div className="center-container">
      <SongContainer>
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
