import React from "react";
import PropTypes from "prop-types";
import * as S from "./Table.style";

const Table = ({ cols, data, tableTitle, handleClick }) => {
  return (
    <S.TableBox>
      <S.TableTitle>{tableTitle}</S.TableTitle>
      <S.Table>
        <thead>
          <tr>
            {cols.map((headerItem, index) => (
              <th key={index}>
                <span
                  key={index}
                  onClick={handleClick}
                  id={index}
                  className={index}
                >
                  {headerItem.title}
                </span>
              </th>
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

Table.propTypes = {
  cols: PropTypes.array,
  data: PropTypes.array,
  tableTitle: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Table;
