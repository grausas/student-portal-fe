import styled from "styled-components";

export const TableBox = styled.div`
  padding: 2em;
  background-color: #292f38;
  border-radius: 5px;
  margin: 3em 0 6em 0;
  box-sizing: border-box;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
  text-align: center;

  @media only screen and (max-width: 768px) {
    padding: 1em 0.3em;
    font-size: 0.8em;
  }
`;

export const TableTitle = styled.span`
  font-weight: 300;
  text-align: center;
  font-size: 1.3em;
  color: #ccc;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  color: #ccc;

  th {
    background: #01baef;
    color: #111;
  }

  && tr,
  th {
    padding: 10px;
    text-align: left;
    @media only screen and (max-width: 768px) {
      padding: 10px 2px;
    }
  }

  td {
    padding: 10px;
    border-bottom: 1px solid #eee;
    text-transform: capitalize;
    @media only screen and (max-width: 768px) {
      padding: 10px 2px;
    }
  }
`;
