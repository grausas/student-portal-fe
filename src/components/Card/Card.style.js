import styled from "styled-components";

export const CardBlock = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  background: #fff;
  flex: 1;
  margin: 10px;
  padding: 1em;
  border-radius: 10px;
  border: 2px solid #eee;
  text-align: center;
  box-sizing: border-box;
`;

export const CardImage = styled.div`
  flex: 1;
  padding-right: 1em;
  img {
    min-width: 100px;
    max-width: 150px;
    width: 100%;
  }
`;

export const CardText = styled.div`
  flex: 1;
  padding-left: 1em;
  border-left: 2px solid #111;
`;

export const CardTitle = styled.div`
  font-size: 1.2em;
  font-weight: 500;
`;

export const CardInfo = styled.div`
  margin-top: 1em;
  background: #eef5f9;
  padding: 1.5em;
  border-radius: 10px;
`;
