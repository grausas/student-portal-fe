import React from "react";
import logo from "../../assets/reading1.svg";
import * as S from "./Header.style";

function Header({ isLoggedIn, logOut }) {
  return (
    <>
      {isLoggedIn && (
        <S.HeaderBlock>
          <S.LogoBlock>
            <S.Logo src={logo} alt="" />
            <span>student portal</span>
          </S.LogoBlock>

          <S.StyledLink onClick={logOut} to="/login">
            <S.LogoutButton>Logout</S.LogoutButton>
          </S.StyledLink>
        </S.HeaderBlock>
      )}
    </>
  );
}

export default Header;
