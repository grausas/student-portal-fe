import React from "react";
import * as S from "./Menu.style";
import { NavigationData } from "../../../utils/NavigationData";

function Menu({ open, handleClose }) {
  return (
    <>
      <S.UlBlock open={open}>
        {NavigationData.map((item, index) => {
          return (
            <li key={index}>
              <S.StyledLink
                activeStyle={{ background: "#01baef", color: "#fff" }}
                to={item.path}
                onClick={handleClose}
              >
                <S.IconBlock>{item.icon}</S.IconBlock>
                <span>{item.title}</span>
              </S.StyledLink>
            </li>
          );
        })}
      </S.UlBlock>
    </>
  );
}

export default Menu;
