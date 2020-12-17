import React, { useState } from "react";
import * as S from "./Burger.style";
import Menu from "../NavigationMenu/Menu";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

function Burger() {
  const [open, setOpen] = useState(false);

  function handleClose() {
    if (open === true) {
      return setOpen(false);
    }
  }

  return (
    <>
      <S.StyledBurger onClick={() => setOpen(!open)}>
        <S.StyledLinkBurger to="#">
          {!open ? <FaIcons.FaBars /> : <AiIcons.AiOutlineClose />}
        </S.StyledLinkBurger>
      </S.StyledBurger>
      <Menu open={open} handleClose={handleClose} />
    </>
  );
}

export default Burger;
