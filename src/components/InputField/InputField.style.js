import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  padding: 0.8em 2.2em;
  font-size: 1.2em;
  border: none;
  color: #111;
  box-sizing: border-box;
  outline: none;
  border-radius: 5px;
  border: 2px solid #ccc;

  &&:focus {
    outline: none;
    border-color: #01baef;
  }
`;

export const InputDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: unset;
`;

export const Select = styled.select`
  width: 100%;
  padding: 0 1em;
  height: 40px;
  color: #111;
  border: none;
  background: #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  text-transform: capitalize;

  &:focus {
    border: 1px solid ${(props) => props.theme.primary.focus.background};
    outline: none;
  }
`;

export const Label = styled.label`
  &:not(:last-child) {
    margin-right: 15px;
  }
  font-size: 1.2em;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 1px solid ${(props) => props.theme.secondary.background};
  box-sizing: border-box;
  &:focus {
    border: 1px solid ${(props) => props.theme.primary.focus.background};
    outline: none;
  }
`;

export const Icon = styled.div`
  position: absolute;
  font-size: 1.2em;
  color: #292f38;
  z-index: 1;
  left: 0;
  padding: 0 0.8em;
`;
