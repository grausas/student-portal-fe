import React from "react";
import * as S from "./Card.style";

function Card({ array }) {
  return (
    <>
      <S.CarBlock>
        <S.CarImage />
        <S.CarName>Card</S.CarName>
      </S.CarBlock>
    </>
  );
}

export default Card;
