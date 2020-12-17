import styled from "styled-components";

export const Section = styled.section`
  background: #${(props) => props.background};
  width: 100%;
  padding: 1em;
  margin-left: 200px;
  margin-top: 80px;

  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Container = styled.section`
  margin: 0 auto;
`;
