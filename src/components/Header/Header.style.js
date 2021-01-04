import styled from "styled-components";
import { Button } from "../index";
import { Link } from "react-router-dom";

export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0b4f6c;
  color: #eee;
  position: fixed;
  z-index: 1;
  padding: 0 1em;
  height: 50px;
  font-weight: 700;
  width: 100%;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    display: flex;
    z-index: 0;
  }
`;

export const Logo = styled.img`
  max-height: 30px;
  max-width: 100%;
  color: #eee;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span:last-child {
    padding-right: 0;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  .icon {
    color: #ccc;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  @media only screen and (max-width: 768px) {
    padding-right: 10px;
  }
`;

export const LogoutButton = styled(Button)`
  padding: 0.5em 1em;

  &:hover {
    background: #01baef;
  }
`;
