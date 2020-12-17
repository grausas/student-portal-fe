import React from "react";
import * as S from "./Table.style";

const Table = ({ cols, data, tableTitle }) => {
  return (
    <S.TableBox>
      <S.TableTitle>{tableTitle}</S.TableTitle>
      <S.Table>
        <thead>
          <tr>
            {cols.map((headerItem, index) => (
              <th key={index}>{headerItem.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => (
              <tr key={index}>
                {cols.map((col, key) => (
                  <td key={key}>{col.render(item)}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </S.Table>
    </S.TableBox>
  );
};

export default Table;
