import styled, { css } from "styled-components";

export const LibraryMusiqueStyled = styled.aside`
  transition: 0.5s ease-in all;
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-100px);
  width: 29%;
  box-shadow: 0 2px 15px #333;
  z-index: 100;
  @media (max-width: 768px) {
    width: 95%;
  }

  min-height: 100vh;
  height: 100%;
  overflow-y: auto;

  background-color: ${(p) => p.theme.theme["nav-btn-svg"]};
  li:first-child {
    border-top: ${(p) => p.theme.theme["color-btn"]} solid 1px;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
    h1 {
      font-weight: 300;
    }
    svg:hover {
      stroke: ${(p) => p.theme.theme["color-btn"]};
      color: ${(p) => p.theme.theme["color-btn"]};
    }
    svg {
      cursor: pointer;
      stroke: ${(p) => p.theme.theme["color-btn"]};
      color: ${(p) => p.theme.theme["color-btn"]};
      path {
        stroke: ${(p) => p.theme.theme["color-btn"]};
        color: ${(p) => p.theme.theme["color-btn"]};
      }
    }
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: ${(p) => p.theme.theme["onhover-control-cl-border"]};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(p) => p.theme.theme["color-btn"]};

    border-radius: 10em;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  ${(p) => {
    if (p.opened === "true") {
      return css`
        transform: translate(0px);
      `;
    } else {
      return css`
        transform: translate(-110%);
      `;
    }
  }}
`;
export const SongLibrary = styled.li`
  & article {
    display: grid;
    grid-template-columns: 120px 1fr;
    grid-template-rows: 120px min-content;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    border-bottom: ${(p) => p.theme.theme["color-btn"]} solid 1px;
    padding: 1rem 2rem;
    cursor: pointer;
    &:hover,
    &:focus {
      background: rgba(0, 0, 0, 0.1);
    }
    &:hover h2,
    &:focus h2 {
      color: ${(p) => p.theme.theme["color-btn"]};
    }
    .img-container {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      box-shadow: 0 0px 6px #333;
    }
    ${isActive}
  }
`;
function isActive(p) {
  if (p.active === "true") {
    return css`
      color: whitesmoke;
      background-color: lightcoral;
    `;
  } else {
    return css`
      color: #333;
      backgroung-color: red;
    `;
  }
}
