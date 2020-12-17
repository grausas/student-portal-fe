import React from "react";
import * as S from "./Footer.style";
import logo from "../../assets/reading.svg";

function Footer() {
  return (
    <S.Footer>
      <S.Logo src={logo} alt="footer" />
      <span>Student Portal &copy; All Rights Reserved</span>
    </S.Footer>
  );
}

export default Footer;
