import React from "react";
import LibraryMusique from "./component/libraryMusique/libraryMusique";
import Nav from "./component/nav/Nav";
import Player from "./component/Player/Player";
import Song from "./component/Song/Song";

import AudioTag from "./component/audioTag/AudioTag";

function App() {
  return (
    <>
      <Nav />
      <Song />
      <Player />
      <LibraryMusique />
      <AudioTag />
    </>
  );
}

export default App;
