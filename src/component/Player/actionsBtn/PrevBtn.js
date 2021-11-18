import React from "react";
import { MdSkipPrevious } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../../redux/player-slice";

import { converTimeAudio } from "../../../utils/audioFn";

function PrevBtn() {
  const currentTime = useSelector((state) => state.player.currentTime);
  const dispatch = useDispatch();

  const { setPrevSong } = playerActions;
  return (
    <>
      <p className="time time-start">
        {converTimeAudio(currentTime) || "00:00"}
      </p>
      <button className="controll prev" onClick={() => dispatch(setPrevSong())}>
        <MdSkipPrevious size="6rem" />
      </button>
    </>
  );
}

export default PrevBtn;
