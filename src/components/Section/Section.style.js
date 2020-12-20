import styled from "styled-components";

export const Section = styled.section`
  background: #${(props) => props.background};
  width: 100%;
  padding: 2em 1.5em;
  margin-left: 200px;
  margin-top: 60px;
  margin-bottom: 60px;
  background: #eef5f9;
  height: 100%;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    padding: 1em 0.5em;
  }
`;

export const Container = styled.section`
  margin: 0 auto;
`;
