import { SongLibrary as Song } from "./LibraryStyles";
import { useDispatch } from "react-redux";

import { playerActions } from "../../redux/player-slice";
function SongLibrary({ song }) {
  const dispatch = useDispatch();

  const { setCurrentSong } = playerActions;
  return (
    <Song
      active={song.isActive.toString()}
      onClick={() => {
        dispatch(setCurrentSong(song));
      }}
    >
      <article>
        <div className="img-container">
          <img src={song.thumbnial} alt="img" />
        </div>
        <div className="info">
          <h2>{song.name} </h2>
          <h4>{song.artist} </h4>
        </div>
      </article>
    </Song>
  );
}

export default SongLibrary;
