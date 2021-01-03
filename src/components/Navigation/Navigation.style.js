import styled from "styled-components";

export const Navigation = styled.nav`
  width: 240px;
  height: 100%;
  border-right: 1px solid #ccc;
  padding-top: 50px;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 0;
    height: 0;
    top: 35px;
    padding-top: 20px;
    background: none;
    border-right: none;
  }
`;
