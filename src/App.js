import React, { useState } from "react";
import { Provider } from "react-redux";
import MusicPlayer from "./MusicPlayer";
import store from "./redux/store";
import { GlobaleStyles } from "./globleStyles/globleStyles";
import { ThemeProvider } from "styled-components";
import { Dark } from "./Theme/Dark";
import { Light } from "./Theme/Light";
function App() {
  const [theme, setTheme] = useState(() => Light);

  function switchTheme() {
    setTheme((prevTheme) => (prevTheme.id === "light" ? Dark : Light));
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={{ theme, switchTheme }}>
        <MusicPlayer />
        <GlobaleStyles />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
