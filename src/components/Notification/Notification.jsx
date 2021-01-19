import React from "react";
import * as S from "./Notification.style";
import PropTypes from "prop-types";

function Notification({ children, type }) {
  return <S.NotificationText type={type}>{children}</S.NotificationText>;
}

Notification.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Notification;
