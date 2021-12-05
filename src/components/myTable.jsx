import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHead";
class MyTable extends React.Component {
  render() {
    const { handelLike, handelDelete, theads, onSort, pagedList } = this.props;

    return (
      <React.Fragment>
        <table className="table">
          <TableHeader theads={theads} onSort={onSort} />
          <TableBody
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
