import React from "react";
import * as S from "./Navigation.style";
import Burger from "./NavigationBurger/Burger";

function Navigation({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn && (
        <S.Navigation>
          <Burger />
        </S.Navigation>
      )}
    </>
  );
}

export default Navigation;
