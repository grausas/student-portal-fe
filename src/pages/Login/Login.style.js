import styled from "styled-components";
import { Section } from "../../components/index";

export const LoginBlock = styled(Section)`
  margin-left: 0;
  margin: 60px auto;
  width: 60%;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;
