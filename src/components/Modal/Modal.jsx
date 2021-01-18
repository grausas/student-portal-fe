import React, { useState } from "react";
import * as S from "./Modal.style";

function Modal({ children, title, btnTitle }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}> {btnTitle} </button>
      {isModalOpen ? (
        <S.Modal>
          <S.ModalContainer>
            <h3>{title}</h3>
            {children}
            <button onClick={closeModal}>close</button>
          </S.ModalContainer>
        </S.Modal>
      ) : null}
    </div>
  );
}

export default Modal;
