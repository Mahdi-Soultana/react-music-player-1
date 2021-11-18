import React from "react";
import { BsPlayFill } from "react-icons/bs";
import { IoMdPause } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { playerActions } from "../../../redux/player-slice";
function PlayBtn() {
  const dispatch = useDispatch();
  const { isPlaying } = useSelector((state) => state.player);
  const { toggleIsPlaying } = playerActions;
  return (
    <button
      className="controll play"
      onClick={() => dispatch(toggleIsPlaying())}
    >
      {isPlaying ? <BsPlayFill size="6rem" /> : <IoMdPause size="3.9rem" />}
    </button>
  );
}

export default PlayBtn;
