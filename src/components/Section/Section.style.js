import styled from "styled-components";

export const Section = styled.section`
  background: #${(props) => props.background};
  width: 100%;
  padding: 2em 1.5em;
`;

export const Container = styled.section`
  position: absolute;
  top: 10%;
  margin: 0 auto;
  display: flex;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    top: 0;
  }
`;
