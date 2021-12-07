import React, { Component } from 'react';
import TableBody from "./tableBody";
import TableHeader from "./tableHead";

const Grid = (props) => {
    const {sortColumn,columns,onSort,handelLike,handelDelete,pagedList} =props
    return (  <React.Fragment>
        <table className="table">
          <TableHeader sortColumn={sortColumn} columns={columns} onSort={onSort} />
          <TableBody
            columns={columns}
            handelLike={handelLike}
            handelDelete={handelDelete}
            pagedList={pagedList}
          />
        </table>
      </React.Fragment>);
}
 
export default Grid;