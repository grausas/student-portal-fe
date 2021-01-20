import styled from "styled-components";
import { Button } from "../index";
import { Link } from "react-router-dom";

export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  position: fixed;
  z-index: 1;
  padding: 0 1em;
  height: 50px;
  font-weight: 700;
  width: 100%;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    display: flex;
    z-index: 0;
  }
`;

export const Logo = styled.img`
  max-height: 40px;
  max-width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  width: 200px;

  span:last-child {
    margin-left: 5px;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const LogoutButton = styled(Button)`
  padding: 0.5em 1em;
`;
