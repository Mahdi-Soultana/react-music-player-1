import React from "react";
import { MdSkipNext } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../../redux/player-slice";
import { converTimeAudio } from "../../../utils/audioFn";
function NextBtn() {
  const duration = useSelector((state) => state.player.duration);
  const dispatch = useDispatch();
  const { setNextSong } = playerActions;

  return (
    <>
      <p className="time time-end">{converTimeAudio(duration) || "00:00"}</p>

      <button className="controll next" onClick={() => dispatch(setNextSong())}>
        <MdSkipNext size="6rem" />
      </button>
    </>
  );
}

export default NextBtn;
