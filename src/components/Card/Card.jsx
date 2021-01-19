import React from "react";
import * as S from "./Card.style";
import PropTypes from "prop-types";

function Card({ data }) {
  return (
    <>
      {data &&
        data.map((item, index) => (
          <S.CardBlock key={index}>
            <S.CardImage>
              <img src={item.image} alt="logo" />
            </S.CardImage>
            <S.CardText>
              <S.CardTitle>{item.name}</S.CardTitle>
              <S.CardInfo>{item.info}</S.CardInfo>
            </S.CardText>
          </S.CardBlock>
        ))}
    </>
  );
}

Card.propTypes = {
  data: PropTypes.object,
};

export default Card;
