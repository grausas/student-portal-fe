import React from "react";
import * as S from "./Footer.style";
import logo from "../../assets/reading1.svg";
import PropTypes from "prop-types";

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

Footer.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default Footer;
