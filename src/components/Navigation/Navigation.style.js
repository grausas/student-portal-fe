import styled from "styled-components";

export const Navigation = styled.nav`
  position: fixed;
  width: 200px;
  height: 100%;
  padding-top: 100px;
  border-right: 1px solid #ccc;

  @media (max-width: 768px) {
    width: 0;
    height: 0;
    top: 35px;
    padding-top: 20px;
    background: none;
    border-right: none;
  }
`;
