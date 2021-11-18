import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import playerSlice from "./player-slice";
const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    player: playerSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;
