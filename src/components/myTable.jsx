import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHead";

import Like from "./like";

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
    const { handelLike, handelDelete, theads, onSort, pagedList } = this.props;

    return (
      <React.Fragment>
        <table className="table">
          <TableHeader columns={this.columns} onSort={onSort} />
          <TableBody
            columns={this.columns}
            handelLike={handelLike}
            handelDelete={handelDelete}
            pagedList={pagedList}
          />
        </table>
      </React.Fragment>
    );
  }
}

export default MyTable;
