import styled from "styled-components";

export const StyledBurger = styled.div`
  display: none;
  position: fixed;
  top: 0px;
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const LogoBlock = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 80px;
  background-color: #0d2538;
`;

export const StyledLinkBurger = styled.div`
  font-size: 2em;
  padding: 10px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
