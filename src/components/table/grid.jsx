import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHead";

const Grid = ({
  sortColumn,
  columns,
  onSort,
  handelLike,
  handelDelete,
  pagedList,
}) => {
  return (
    <React.Fragment>
      <table className="table">
        <TableHeader
          sortColumn={sortColumn}
          columns={columns}
          onSort={onSort}
        />
        <TableBody
          columns={columns}
          handelLike={handelLike}
          handelDelete={handelDelete}
          pagedList={pagedList}
        />
      </table>
    </React.Fragment>
  );
};

export default Grid;
