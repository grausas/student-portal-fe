import React from "react";
import * as S from "./Section.style";
import PropTypes from "prop-types";

function Section({ children, fullWidth, background, className }) {
  return (
    <S.Section background={background} className={className}>
      {!fullWidth && <S.Container>{children}</S.Container>}
      {fullWidth && children}
    </S.Section>
  );
}

Section.propTypes = {
  children: PropTypes.array,
  fullWidth: PropTypes.bool,
  background: PropTypes.string,
  className: PropTypes.string,
};

export default Section;
