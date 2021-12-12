import React from "react";
import Pagination from "./table/pagination";
import { paginate } from "../utils/paginate";
import MyTable from "./myTable";
import _ from "lodash";
import Input from "./input";
import SearchBox from "./searchBox";

class List extends React.Component {
  state = {
    search: "",
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
    if (path) {
      path = path.toLowerCase();
      const sortColumn = { ...this.state.sortColumn };
      if (sortColumn.path === path)
        sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
      else {
        sortColumn.path = path;
        sortColumn.order = "asc";
      }
      this.setState({ sortColumn });
    } else console.log("onSort path", "background:red");
  };

  handleSeacrh = ({ currentTarget: input }) => {
    // debugger;
    // let { search } = this.state;
    // search = input.value;
    this.setState({ search:input.value });
  };

  getListDataAndSort = (listItems, sortColumn, activePage, pageSize) => {
    const sorted = _.orderBy(listItems, [sortColumn.path], [sortColumn.order]);
    console.log(
      "%crender - sorted :",
      "background:green",
      sortColumn.path,
      sorted
    );
    return paginate(sorted, activePage, pageSize);
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
    const { sortColumn, pageSize, search } = this.state;
    let finditems = listItems.filter((i) =>
      i.title.toLowerCase().includes(search.toLowerCase())
    );
    // debugger;
    const pagedList = this.getListDataAndSort(
      finditems,
      sortColumn,
      activePage,
      pageSize
    );

    return (
      <div>
        <SearchBox
          name="search"
          label="search"
          value={search}
          onChange={this.handleSeacrh}
          numberResult={finditems.length}
        />

        <MyTable
          pagedList={pagedList}
          handelLike={handelLike}
          handelDelete={handelDelete}
          theads={theads}
          onSort={this.onSort}
          sortColumn={sortColumn}
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
