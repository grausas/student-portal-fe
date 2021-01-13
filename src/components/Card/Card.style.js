import styled from "styled-components";

export const CardBlock = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  background: #fff;
  flex: 1;
  margin: 5px;
  padding: 1em;
  border-radius: 10px;
  text-align: center;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 1em;
  border-left: 2px solid #111;
`;

export const CardTitle = styled.div`
  font-size: 1em;
  font-weight: 500;
`;

export const CardInfo = styled.div`
  margin-top: 1em;
  background: #eef5f9;
  padding: 1.5em 0;
  border-radius: 10px;
`;
