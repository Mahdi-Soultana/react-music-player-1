import React, { useMemo } from "react";
import SongLibrary from "./SongLibrary";
import { useSelector } from "react-redux";

function SongsUL() {
  let data = useSelector((state) => state.player.data);
  data = useMemo(() => data, [data]);

  return (
    <ul>
      {data.map((song) => (
        <SongLibrary song={song} key={song.id} data={data} />
      ))}
    </ul>
  );
}

export default SongsUL;
