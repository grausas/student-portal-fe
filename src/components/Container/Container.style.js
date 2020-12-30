import styled from "styled-components";

export const Container = styled.div`
  max-width: 80%;
  width: 100%;
  height: 80%;
  padding: 0 1em;
  margin: 0 auto;
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    padding: 0;
    max-width: 100%;
    height: 100%;
  }
`;
