import React from "react";
import * as S from "./Footer.style";
import logo from "../../assets/reading1.svg";

function Footer({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn && (
        <S.Footer>
          <S.Logo src={logo} alt="footer" />
          <span>Student Portal &copy; All Rights Reserved 2021</span>
        </S.Footer>
      )}
    </>
  );
}

export default Footer;
