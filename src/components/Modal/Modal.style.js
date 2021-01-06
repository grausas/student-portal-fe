import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  max-width: 1200px;
  max-height: 30vh;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
