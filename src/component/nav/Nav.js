import React, { useContext } from "react";
import { GrMusic } from "react-icons/gr";
import { StyledNav } from "./StyledNav";
import { useDispatch } from "react-redux";
import { uiActions } from "../../redux/ui-slice";
import styled, { ThemeContext } from "styled-components";
import { motion, useCycle } from "framer-motion";
export const Toggle = styled(motion.div)`
  margin: 0 2rem;
  width: 60px;
  height: 30px;
  border-radius: 15em;
  background-color: ${(p) => p.theme.theme["color-btn"]};
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 0 2px #333;
  cursor: pointer;
  margin-top: 2rem;
  span {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(p) => p.theme.theme["onhover-control-cl-border"]};
  }
`;
function Nav() {
  const dispatch = useDispatch();
  const [mode, setMode] = useCycle("on", "off");
  const { switchTheme } = useContext(ThemeContext);

  const { toggleLibrary } = uiActions;
  const toggleVariant = {
    on: {
      x: 30,
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 200,
        duration: 0.1,
      },
    },
    off: {
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        duration: 0.1,
      },
    },
  };
  return (
    <StyledNav>
      <div className="center-container">
        <h1 className="logo">ChillHop</h1>
        <div>
          <button className="btn" onClick={() => dispatch(toggleLibrary())}>
            <span>library</span>
            <GrMusic />
          </button>
          <Toggle
            onClick={() => {
              switchTheme();
              setMode();
            }}
          >
            <motion.span variants={toggleVariant} animate={mode}></motion.span>
          </Toggle>
        </div>
      </div>
    </StyledNav>
  );
}

export default Nav;
