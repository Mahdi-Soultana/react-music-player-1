import React from "react";
import { Provider } from "react-redux";
import MusicPlayer from "./MusicPlayer";
import store from "./redux/store";
import { GlobaleStyles } from "./globleStyles/globleStyles";
function App() {
  return (
    <Provider store={store}>
      <MusicPlayer />
      <GlobaleStyles />
    </Provider>
  );
}

export default App;
