import React from "react";
import logo from "../../assets/reading.svg";
import * as S from "./Header.style";

function Header() {
  return (
    <S.HeaderBlock>
      <S.LogoBlock>
        <S.Logo src={logo} alt="" />
        <span>Student Portal</span>
      </S.LogoBlock>
      <S.StyledLink to="#">
        <S.LogoutButton>Logout</S.LogoutButton>
      </S.StyledLink>
    </S.HeaderBlock>
  );
}

export default Header;
