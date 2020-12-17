import React from "react";
import * as S from "./Button.style";

function Button({ children, handleClick, color, className }) {
  return (
    <S.Button onClick={handleClick} color={color} className={className}>
      {children}
    </S.Button>
  );
}

export default Button;
