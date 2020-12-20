import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  &:last-child {
    margin-left: 20px;
    flex-shrink: 2;
  }
`;

export const FormBox = styled.div`
  width: 100%;
  padding: 2em;
  background-color: #292f38;
  border-radius: 5px;
  margin: 3em 0 6em 0;
  box-sizing: border-box;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  text-align: center;
`;

export const Form = styled.form`
  background: #292f38;
  padding: 20px;
  color: #ccc;
  text-align: left;
`;

export const FormTitle = styled.span`
  font-weight: 300;
  text-align: center;
  font-size: 1.3em;
  color: #ccc;
`;
