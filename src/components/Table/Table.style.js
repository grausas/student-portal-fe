import styled from "styled-components";

export const TableBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  margin: 2em 0;
  box-sizing: border-box;
  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 1180px) {
    font-size: 0.9em;
  }

  @media only screen and (max-width: 768px) {
    padding: 1em 0.3em;
    font-size: 0.8em;
  }
`;

export const TableTitle = styled.span`
  font-weight: 400;
  text-align: center;
  font-size: 1.3em;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    border-bottom: 2px solid #eee;
    text-align: left;
    color: #111;
    text-transform: uppercase;
    padding: 5px 10px;
    @media only screen and (max-width: 768px) {
      padding: 5px 2px;
    }
  }

  tr {
    border-bottom: 1px solid #eee;
    @media only screen and (max-width: 768px) {
      padding: 10px 2px;
    }
  }

  tr:last-child {
    border-bottom: none;
  }

  td {
    padding: 8px 10px;
    @media only screen and (max-width: 768px) {
      padding: 10px 2px;
    }
  }
`;
