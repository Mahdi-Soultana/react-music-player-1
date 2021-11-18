import styled from "styled-components";
export const PlayerStyles = styled.section`
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  grid-template-rows: auto;
  gap: 1rem;
  position: relative;
  @media (max-width: 765px) {
    gap: 3rem;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    place-content: center center;
    place-items: center center;
    .input-container {
      grid-column: 1/-1;
      grid-row: 1/2;
      width: 80%;
    }
  }
  &.lg {
    width: 50%;
    @media (max-width: 765px) {
      width: 100%;
    }
  }
  button.controll {
    &.play {
      grid-column: 1/-1;
      justify-self: center;
    }
    @media (max-width: 768px) {
      &.play {
        order: 1;
        grid-column: auto;
      }
      &.next {
        order: 2;
      }
      &.prev {
        order: 0;
      }
    }
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    padding: 0rem;
    background-color: transparent;
    &:hover {
      color: lightcoral;
      border-color: lightcoral;
    }
    &* {
      width: 100%;
      height: 100%;
    }
    &:first-child {
      justify-self: -start;
    }
    &:last-child {
      justify-self: -start;
    }
  }

  .time {
    position: absolute;
    font-size: 1.4rem;
    font-weight: 700;
    top: 38%;
    &-start {
      left: 13%;
    }
    &-end {
      right: 13%;
    }

    @media (max-width: 768px) {
      top: -20%;
      &-start {
        left: 7%;
      }
      &-end {
        right: 7%;
      }
    }
  }
`;
