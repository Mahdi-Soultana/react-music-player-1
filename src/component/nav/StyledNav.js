import styled from "styled-components";
export const StyledNav = styled.nav`
  padding: 1rem;
  position: relative;
  z-index: 10;
  .center-container {
    h1 {
      align-self: flex-start;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
    }
  }
  svg path {
    stroke: ${(p) => p.theme.theme["color-btn"]};
    color: ${(p) => p.theme.theme["color-btn"]};
  }
  svg {
    cursor: pointer;
  }
  button.btn:hover {
    color: ${(p) => p.theme.theme["nav-btn-svg"]};
    svg path {
      stroke: ${(p) => p.theme.theme["nav-btn-svg"]};
      color: ${(p) => p.theme.theme["nav-btn-svg"]};
    }
    svg {
      cursor: pointer;
    }
  }
`;
