import styled, { css } from "styled-components";
export const StyledNav = styled.nav`
  padding: 1rem;
  position: relative;
  z-index: 10;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  button.btn:hover {
    color: white;
    svg path {
      stroke: white;
      color: white;
    }
    svg {
      cursor: pointer;
    }
  }
`;
