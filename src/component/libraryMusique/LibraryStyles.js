import styled, { css } from "styled-components";

export const LibraryMusiqueStyled = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 29%;
  box-shadow: 0 2px 15px #333;
  z-index: 100;
  @media (max-width: 768px) {
    width: 95%;
  }

  min-height: 100vh;
  height: 100%;
  overflow-y: auto;

  background-color: #fff;
  li:first-child {
    border-top: rgba(0, 0, 0, 0.2) solid 1px;
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
      fill: coral;
      color: coral;
    }
    svg {
      cursor: pointer;
    }
  }
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;

    border-radius: 10em;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
export const SongLibrary = styled.li`
  & article {
    display: grid;
    grid-template-columns: 120px 1fr;
    grid-template-rows: 120px min-content;
    gap: 1rem;
    align-items: center;
    justify-content: center;

    border-bottom: rgba(0, 0, 0, 0.2) solid 1px;
    padding: 1rem 2rem;
    cursor: pointer;
    &:hover,
    &:focus {
      background: rgba(0, 0, 0, 0.1);
    }
    &:hover h2,
    &:focus h2 {
      color: white;
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
