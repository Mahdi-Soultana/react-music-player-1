import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { playerActions } from "../../redux/player-slice";

function AudioTag() {
  const dispatch = useDispatch();
  const { setCurrentTime, setDuration, SetAudioRef } = playerActions;
  const audioRef = useRef(null);
  const data = useSelector((state) => state.player.data);
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const audioRefs = useSelector((state) => state.player.audioRef);
  const currentSong = useSelector((state) => state.player.currentSong);
  const { audioSrc = "" } = currentSong;
  console.log(audioRefs);

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
  }, [SetAudioRef, dispatch]);

  return (
    <audio
      src={currentSong?.audioSrc || data[0].audioSrc}
      ref={audioRef}
      onTimeUpdate={(e) => {
        dispatch(setCurrentTime(e.target.currentTime));
      }}
      onLoadedMetadata={(e) => {
        dispatch(setDuration(e.target.duration));
        console.log(e);
      }}
    ></audio>
  );
}

export default AudioTag;
