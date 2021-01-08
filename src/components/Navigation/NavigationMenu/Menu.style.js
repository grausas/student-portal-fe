import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const UlBlock = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: none;
  font-size: 1.2em;

  li {
    width: 100%;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    width: 220px;
    height: 100vh;
    background-color: #fff;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

    li {
      width: 100%;
      color: #111;
    }
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  width: 100%;
  text-decoration: none;
  padding: 15px 0px 15px 16px;
  color: #111;

  &:hover {
    background: #01baef;
  }
  span {
    margin-left: 10px;
  }

  @media only screen and (max-width: 768px) {
    &:hover {
      background: #01baef;
      color: #111;
    }
  }
`;

export const IconBlock = styled.div`
  color: #292f38;
  @media only screen and (max-width: 768px) {
    color: #111;
    &:hover {
      color: #fff;
    }
  }
`;
