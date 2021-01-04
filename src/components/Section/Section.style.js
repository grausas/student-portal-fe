import styled from "styled-components";

export const Section = styled.section`
  background-color: #eef5f9;
  width: 100%;
  padding: 4em 1em;
  margin-left: 220px;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Container = styled.section`
  height: 100%;
  width: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    margin-left: 0;
  }
`;
