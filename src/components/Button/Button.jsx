import React from "react";
import * as S from "./Button.style";
import PropTypes from "prop-types";
function Button({ children, handleClick, color, className }) {
  return (
    <S.Button onClick={handleClick} color={color} className={className}>
      {children}
    </S.Button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
