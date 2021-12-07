import React from "react";
// import TableBody from "./table/tableBody";
// import TableHeader from "./table/tableHead";

import Like from "./table/like";
import Grid from "./table/grid";

class MyTable extends React.Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "numberInStock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (item) => (
        <Like movie={item} onClick={() => this.props.handelLike(item)} />
      ),
    },
    {
      key: "delete",
      content: (item) => (
        <button
          onClick={() => this.props.handelDelete(item._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { handelLike, handelDelete, onSort, pagedList, sortColumn } =
      this.props;

    return (
      <React.Fragment>
        <Grid
          sortColumn={sortColumn}
          columns={this.columns}
          onSort={onSort}
          pagedList={pagedList}
          handelLike={handelLike}
          handelDelete={handelDelete}
        />
        {/* <table className="table">
          <TableHeader sortColumn={sortColumn} columns={this.columns} onSort={onSort} />
          <TableBody
            columns={this.columns}
            handelLike={handelLike}
            handelDelete={handelDelete}
            pagedList={pagedList}
          />
        </table> */}
      </React.Fragment>
    );
  }
}

export default MyTable;
