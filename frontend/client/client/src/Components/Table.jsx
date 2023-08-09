import React from "react";
// import "./App.css";
import fakeData from "./table.json";
import { useTable } from "react-table";

function Table() {
  const newData = fakeData.filter((d) => {
    if (d.UserId === 1) return d;
  });

  const data = React.useMemo(() => newData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "User Id",
        accessor: "UserId",
      },
      {
        Header: "Bond",
        accessor: "Bond",
      },
      {
        Header: "Face Value",
        accessor: "FaceValue",
      },
      {
        Header: "Status",
        accessor: "Status",
      },
      {
        Header: "Maturity Date",
        accessor: "MaturityDate",
      },
      {
        Header: "Quantity",
        accessor: "Quantity",
      },
      {
        Header: "Price/Quantity",
        accessor: "Price_per_quantity",
      },
      {
        Header: "Total Price",
        accessor: "Total",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="App">
      <div className="container d-flex justify-content-center m-5">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
