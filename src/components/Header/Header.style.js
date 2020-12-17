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
  height: 60px;
  font-weight: 700;
  width: 100%;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  @media only screen and (max-width: 768px) {
    display: flex;
    z-index: 0;
  }
  span:last-child {
    padding-right: 1em;
  }
`;

export const Logo = styled.img`
  max-height: 40px;
  max-width: 100%;
  margin-left: 20px;
  color: #eee;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoBlock = styled.div`
  width: 200px;
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
  padding-right: 30px;
  text-decoration: none;
`;

export const LogoutButton = styled(Button)`
  margin-left: 30px;

  &:hover {
    background: #01baef;
  }
`;
