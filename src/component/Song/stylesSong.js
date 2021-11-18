import styled, { keyframes, css } from "styled-components";
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const SongContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 350px 30px 30px;
  gap: 1rem;

  align-items: center;
  justify-content: center;
  justify-items: center;
  @media (max-width: 768px) {
    grid-template-rows: 310px 30px 50px;
    margin-top: 5vh;
  }
  @media (max-width: 388px) {
    grid-template-rows: 240px 30px 60px;
    margin-top: 2vh;
  }
  .img-container {
    ${(p) => {
      if (p.animation === "true") {
        return css`
          animation-play-state: running;
          animation: ${rotate} infinite linear 20s;
        `;
      } else {
        return css`
          animation-play-state: paused;
        `;
      }
    }}
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.6);
    width: 340px;
    height: 340px;
    @media (max-width: 768px) {
      width: 300px;
      height: 300px;
    }
    @media (max-width: 388px) {
      width: 250px;
      height: 240px;
    }
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: #eee;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      border-radius: 50%;
      box-shadow: 0 1px 10px #eee;
    }
  }
  position: relative;
  z-index: 10;

  transition: 0.5s ease-out all;

  ${(p) => {
    if (p.opened === "true") {
      return css`
        transform: perspective(1750) rotateY(50deg) translate(100px);
        left: 20%;
      `;
    } else {
      return css`
        transform: perspective(0) rotateY(0deg) translate(0px);
        left: 0%;
      `;
    }
  }}
`;
