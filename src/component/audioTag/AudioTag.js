import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { playerActions } from "../../redux/player-slice";

function AudioTag() {
  const dispatch = useDispatch();
  const { setCurrentTime, setDuration, SetAudioRef, setNextSong } =
    playerActions;
  const audioRef = useRef(null);
  const data = useSelector((state) => state.player.data);
  const isPlaying = useSelector((state) => state.player.isPlaying);

  const currentSong = useSelector((state) => state.player.currentSong);
  const { audioSrc = "" } = currentSong;

  useEffect(() => {
    async function track() {
      if (isPlaying) {
        const playPromise = audioRef.current.pause();
        playPromise && (await playPromise);
      } else {
        const playPromise = audioRef.current.play();

        playPromise && (await playPromise);
      }
    }
    track();
  }, [isPlaying, audioSrc]);

  useEffect(() => {
    dispatch(SetAudioRef(audioRef.current));
  }, [SetAudioRef, dispatch, audioRef]);

  return (
    <audio
      src={currentSong?.audioSrc || data[0].audioSrc}
      ref={audioRef}
      onTimeUpdate={(e) => {
        dispatch(setCurrentTime(e.target.currentTime));
      }}
      onLoadedMetadata={(e) => {
        dispatch(setDuration(e.target.duration));
      }}
      onEnded={() => {
        dispatch(setNextSong());
      }}
    ></audio>
  );
}

export default AudioTag;
