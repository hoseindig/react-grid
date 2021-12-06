import React from "react";
class TableHead extends React.Component {
  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    // console.log("sortColumn", sortColumn,"column", column);
    if(sortColumn.path!==column.path) return null;
    if(sortColumn.order==='asc') return <i className="fa fa-sort-asc"></i>
    else return <i className="fa fa-sort-desc"></i>
  };
  render() {
    const { onSort, columns } = this.props;
    return (
      <React.Fragment>
        <thead>
          <tr>
            {columns.map((column) => {
              return (
                <th
                  key={column.path ? column.path : column.key}
                  className="tHead"
                  onClick={() => onSort(column.path)}
                >
                  {column.label} {this.renderSortIcon(column)}
                </th>
              );
            })}
            <th></th>
          </tr>
        </thead>
      </React.Fragment>
    );
  }
}

export default TableHead;
