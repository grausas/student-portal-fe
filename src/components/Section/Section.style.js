import styled from "styled-components";

export const Section = styled.section`
  background: #${(props) => props.background};
  width: 100%;
`;

export const Container = styled.section`
  display: flex;
  height: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
