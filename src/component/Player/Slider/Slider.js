import React from "react";
import { useSelector } from "react-redux";
import { SliderContainer } from "./SliderContainer";
// import { playerActions } from "../../../redux/player-slice";
function Slider() {
  const currentTime = useSelector((state) => state.player.currentTime);

  const audioRef = useSelector((state) => state.player.audioRef);
  const duration = useSelector((state) => state.player.duration);

  const currentSong = useSelector((state) => state.player.currentSong);
  // console.log(audioRef);
  const percentage = (currentTime / duration) * 100;

  return (
    <SliderContainer
      className="input-container"
      x={String(percentage)}
      colors={currentSong.colors}
    >
      <input
        type="range"
        name="tracker"
        id="tracker"
        min={0}
        value={currentTime}
        max={duration}
        onChange={(e) => {
          if (audioRef) {
            audioRef.currentTime = e.target.value;
          }
        }}
      />
      <div className="cover"></div>
    </SliderContainer>
  );
}

export default Slider;
