import React from "react";
import { GrMusic } from "react-icons/gr";
import { StyledNav } from "./StyledNav";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../redux/ui-slice";

function Nav() {
  const dispatch = useDispatch();

  const { toggleLibrary } = uiActions;
  const libraryIsOpen = useSelector((state) => state.ui.libraryIsOpen);
  return (
    <StyledNav>
      <div className="center-container">
        <h1 className="logo">ChillHop</h1>
        <button className="btn" onClick={() => dispatch(toggleLibrary())}>
          <span>library</span>
          <GrMusic />
        </button>
      </div>
    </StyledNav>
  );
}

export default Nav;
