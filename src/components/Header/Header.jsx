import React from "react";
import logo from "../../assets/reading.svg";
import * as S from "./Header.style";
import * as AiIcons from "react-icons/ai";

function Header() {
  return (
    <S.HeaderBlock>
      <S.LogoBlock>
        <S.Logo src={logo} alt="" />
        <span>Student Portal</span>
      </S.LogoBlock>
      <S.LogoutBlock>
        <AiIcons.AiOutlineLogout className="icon" />
        <span>Logout</span>
      </S.LogoutBlock>
    </S.HeaderBlock>
  );
}

export default Header;
