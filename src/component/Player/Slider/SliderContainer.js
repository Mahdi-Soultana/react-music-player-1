import styled from "styled-components";
export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 100%;
  @media (max-width: 768px) {
    width: 90%;
    height: 55%;
  }
  p {
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 1.6rem;
  }
  overflow: hidden;
  position: relative;
  border-radius: 10em;
  height: 10%;
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateX(${(p) => p.x + "%" || "50%"});
    pointer-events: none;
    background: coral;
  }
  input {
    cursor: pointer;
    width: 100%;
    appearance: none;
    background: linear-gradient(to right, red, blue);
    border-radius: 10em;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    &::-webkit-slider-thumb {
      appearance: none;
      width: 19px;
      height: 10px;
      z-index: 10;
      cursor: pointer;
      background: transparent;
      /* box-shadow: 1px 1px 10px #eee, 1px 1px 10px #eef; */
      border-radius: 50%;
    }
  }
`;
