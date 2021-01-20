import styled from "styled-components";

export const Navigation = styled.nav`
  width: 220px;
  height: 100%;
  position: fixed;
  border-right: 1px solid #ccc;
  padding-top: 60px;
  background-color: #fff;

  @media (max-width: 1180px) {
    width: 180px;
  }

  @media (max-width: 768px) {
    width: 0;
    height: 0;
    top: 29px;
    padding-top: 20px;
    background: none;
    border-right: none;
    z-index: 999;
  }
`;
