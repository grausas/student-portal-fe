import React from "react";
import * as S from "./Card.style";

function Card({ data }) {
  return (
    <>
      {data &&
        data.map((item, index) => (
          <S.CardBlock key={index}>
            <S.CardImage src={item.image} />
            <div>
              <S.CardTitle>{item.name}</S.CardTitle>
              <S.CardInfo> 22 </S.CardInfo>
            </div>
          </S.CardBlock>
        ))}
    </>
  );
}

export default Card;
