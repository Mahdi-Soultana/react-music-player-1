import { createSlice } from "@reduxjs/toolkit";

import getData from "../data";
const player = createSlice({
  name: "player",
  initialState: {
    data: getData() || [],
    isPlaying: true,
    audioRef: null,
    currentSong: getData()[0],
    currentTime: 0,
    duration: 0,
  },
  reducers: {
    setDuration(state, action) {
      state.duration = action.payload;
    },
    replaceData(state, action) {
      state.data = action.payload;
    },
    toggleIsPlaying(state) {
      state.isPlaying = !state.isPlaying;
    },
    SetAudioRef(state, action) {
      state.audioRef = action.payload;
    },
    setCurrentSong(state, action) {
      state.data = state.data.map((song) => {
        if (song.isActive === true) {
          return { ...song, isActive: false };
        }

        if (action.payload.id === song.id) {
          return { ...song, isActive: true };
        }
        return song;
      });

      state.currentSong = { ...action.payload, isActive: true };
    },
    setNextSong(state) {
      let currentSongIndex = state.data.findIndex(
        (song) => song.id === state.currentSong.id,
      );
      if (currentSongIndex === state.data.length - 1) {
        currentSongIndex = -1;
      }

      setIsActive(state, currentSongIndex + 1);

      state.currentSong = state.data[currentSongIndex + 1];
    },
    setPrevSong(state) {
      let currentSongIndex = state.data.findIndex(
        (song) => song.id === state.currentSong.id,
      );
      if (currentSongIndex === 0) {
        currentSongIndex = state.data.length;
      }
      setIsActive(state, currentSongIndex - 1);

      state.currentSong = state.data[currentSongIndex - 1];
    },
    setCurrentTime(state, action) {
      state.currentTime = action.payload;
    },
  },
});

export const playerActions = player.actions;

export default player;

function setIsActive(state, currentSongIndex) {
  state.data = state.data.map((song) => ({ ...song, isActive: false }));
  state.data[currentSongIndex] = {
    ...state.data[currentSongIndex],
    isActive: true,
  };
}
