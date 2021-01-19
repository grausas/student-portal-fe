import React from "react";
import * as S from "./Container.style";
import PropTypes from "prop-types";

function Container({ children }) {
  return <S.Container>{children}</S.Container>;
}

Container.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Container;
