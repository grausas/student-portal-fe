import styled from "styled-components";
import { Section } from "../../components/index";
import logo from "../../assets/green.jpg";

export const LoginBlock = styled(Section)`
  margin: 0 auto;
  width: 100%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  padding: 0;
  @media only screen and (max-width: 768px) {
    border-radius: 0;
    box-shadow: none;
  }
`;

export const FormDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: #f7f9fb;
  padding: 8em 1em;
  border-radius: 0 20px 20px 0;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 1em;
    border-radius: 0;
  }
`;

export const ImageDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 2em 6em;
  text-align: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 3em 1em;
  }

  span {
    position: relative;
    font-size: 2em;
    color: #f7f9fb;
    span {
      color: #ccc;
      text-decoration: underline;
    }
    @media only screen and (max-width: 768px) {
      font-size: 1em;
    }
  }

  &::before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: 50% 0;
    background-size: cover;
    opacity: 0.5;
    border-radius: 20px 0 0 20px;

    @media only screen and (max-width: 768px) {
      border-radius: 0;
    }
  }
`;
