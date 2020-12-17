import styled from "styled-components";
import { Link } from "react-router-dom";

export const UlBlock = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: none;

  li {
    width: 100%;
    padding: 6px 8px;
    color: #fff;
  }

  @media screen and (max-width: 768px) {
    position: fixed;
    width: 220px;
    height: 100vh;
    background-color: #0b4f6c;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

    li {
      width: 100%;
      color: #111;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  width: 100%;
  text-decoration: none;
  padding: 10px 0px 10px 16px;
  border-radius: 4px;
  color: #111;

  &:hover {
    background: #01baef;
  }
  span {
    margin-left: 10px;
  }

  @media only screen and (max-width: 768px) {
    color: #eee;
    &:hover {
      background: #01baef;
      color: #111;
    }
  }
`;

export const IconBlock = styled.div`
  color: #292f38;
  @media only screen and (max-width: 768px) {
    color: #eee;
    &:hover {
      color: #fff;
    }
  }
`;
