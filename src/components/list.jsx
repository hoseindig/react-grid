import React from "react";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import MyTable from "./myTable";
import _ from "lodash";

class List extends React.Component {
  state = {
    pageSize: 4,
    listItems: this.props.listItems,
    sortColumn: { path: this.props.theads[0].toLowerCase(), order: "asc" },
  };
  componentDidMount() {
    console.log("%ccomponentDidMount", "background:green");
  }
  componentDidUpdate(o, n) {
    console.log("%ccomponentDidUpdate", "background:blue", o, n);
  }
  componentWillUnmount() {
    console.log("%ccomponentWillUnmount", "background:red");
  }

  onSort = (path) => {
    path = path.toLowerCase();
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
      else{
        sortColumn.path=path
        sortColumn.order="asc"
      }
    this.setState({ sortColumn});
  };

  render() {
    const {
      listItems,
      handelDelete,
      handelLike,
      handlePageChange,
      activePage,
      theads,
    } = this.props;
    const { sortColumn } = this.state;
    const sorted = _.orderBy(listItems, [sortColumn.path], [sortColumn.order]);
    console.log(
      "%crender - sorted :",
      "background:green",
      sortColumn.path,
      sorted
    );
    const pagedList = paginate(sorted, activePage, this.state.pageSize);
    return (
      <div>
        <MyTable
          pagedList={pagedList}
          handelLike={handelLike}
          handelDelete={handelDelete}
          theads={theads}
          onSort={this.onSort}
        />
        <Pagination
          handlePageChange={handlePageChange}
          pageSize={this.state.pageSize}
          itemCount={listItems.length}
          activePage={activePage}
        />
      </div>
    );
  }
}

export default List;
