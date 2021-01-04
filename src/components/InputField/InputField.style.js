import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  position: relative;
  padding: 0 0.5em;
  font-size: 1.2em;
  border: none;
  height: 50px;
  color: #111;
  box-sizing: border-box;
  outline: none;
`;

export const InputDiv = styled.div`
  width: 100%;
  display: flex;
  /* border: 2px solid #e6e6e6; */
  justify-content: center;
  align-items: center;
  padding: 0 0em 0 1em;
  background-color: #fff;
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
