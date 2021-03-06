import React from "react";
import { Loading } from "../index";
import PropTypes from "prop-types";
import * as S from "./Table.style";

const Table = ({ cols, data, tableTitle, handleClick }) => {
  return (
    <S.TableBox>
      <S.TableTitle>{tableTitle}</S.TableTitle>
      {data ? (
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
            {data.length > 0 ? (
              data.map((item, index) => (
                <tr key={index}>
                  {cols.map((col, key) => (
                    <td key={key}>{col.render(item)}</td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td>There is no data</td>
              </tr>
            )}
          </tbody>
        </S.Table>
      ) : (
        <Loading />
      )}
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
