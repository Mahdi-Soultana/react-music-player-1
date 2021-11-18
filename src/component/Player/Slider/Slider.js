import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SliderContainer } from "./SliderContainer";
import { playerActions } from "../../../redux/player-slice";
function Slider() {
  const dispatch = useDispatch();
  const currentTime = useSelector((state) => state.player.currentTime);
  const duration = useSelector((state) => state.player.duration);

  const percentage = (currentTime / duration) * 100;

  return (
    <SliderContainer className="input-container" x={String(percentage)}>
      <input
        type="range"
        name="tracker"
        id="tracker"
        min={0}
        value={currentTime}
        max={duration}
        onChange={(e) => {
          dispatch(playerActions.setCurrentTime(Number(e.target.value)));
          // console.log("change");
          // console.log(e.target.value);
        }}
      />
      <div className="cover"></div>
    </SliderContainer>
  );
}

export default Slider;
