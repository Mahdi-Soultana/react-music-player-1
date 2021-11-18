import React from "react";
import { LibraryMusiqueStyled } from "./LibraryStyles";
import { MdOutlineLibraryMusic } from "react-icons/md";

import { uiActions } from "../../redux/ui-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SongsUL from "./SongsUL";
function LibraryMusique() {
  const { libraryIsOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const { toggleLibrary } = uiActions;

  return (
    libraryIsOpen && (
      <LibraryMusiqueStyled>
        <nav>
          <h1>Library</h1>
          <MdOutlineLibraryMusic
            size="3rem"
            color="#333"
            onClick={() => dispatch(toggleLibrary())}
          />
        </nav>
        <SongsUL />
      </LibraryMusiqueStyled>
    )
  );
}

export default LibraryMusique;
