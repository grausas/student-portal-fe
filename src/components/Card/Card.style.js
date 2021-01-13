import styled from "styled-components";

export const CardBlock = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  background: #fff;
  width: 350px;
  margin-bottom: 20px;
  padding: 1em;
  border-radius: 10px;
  border: 2px solid #eee;
  text-align: center;
`;

export const CardImage = styled.img`
  max-width: 150px;
`;

export const CardTitle = styled.div`
  font-size: 1.2em;
  margin-top: 10px;
`;

export const CardInfo = styled.div`
  background: #eee;
  padding: 20px;
  border-radius: 10px;
`;
