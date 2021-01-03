import styled from "styled-components";

export const FormBox = styled.div`
  width: 100%;
  /* padding: 2em 4em; */
  /* background-color: #f7f9fb; */
  border-radius: 5px;
  margin: 1em 0 1em 0;
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    padding: 0.5em;
  }
`;

export const Form = styled.form`
  /* background: #f7f9fb; */
  color: #111;
`;

export const FormTitle = styled.h3`
  font-weight: 400;
  text-align: center;
  font-size: 1.6em;
  color: #111;
  margin-bottom: 30px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  text-align: left;
`;
