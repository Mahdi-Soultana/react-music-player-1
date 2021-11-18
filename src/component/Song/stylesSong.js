import styled from "styled-components";

export const SongContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 350px 30px 30px;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  justify-items: center;
  @media (max-width: 768px) {
    grid-template-rows: 300px 30px 30px;
  }
  .img-container {
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.6);
    width: 340px;
    height: 340px;
    @media (max-width: 768px) {
      width: 240px;
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
`;
