import styled from "styled-components";

export const Section = styled.section`
  background-color: #eef5f9;
  width: 100%;
  padding: 4em 1em;
`;

export const Container = styled.section`
  /* display: flex; */
  height: 100%;
  width: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
