import styled from "styled-components";

export const Section = styled.section`
  background: #${(props) => props.background};
  padding: 2em 1em;
  margin-left: 200px;
  margin-top: 80px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Container = styled.section`
  margin: 0 auto;
`;
