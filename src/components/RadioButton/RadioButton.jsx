import React from "react";
import * as S from "./RadioButton.style";

function RadioButton({ callback, value, name }) {
  return (
    <S.RadioButton
      type="radio"
      value={value}
      name={name}
      onChange={callback}
    ></S.RadioButton>
  );
}

export default RadioButton;
