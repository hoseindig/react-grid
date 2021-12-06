import React from "react";
class TableHead extends React.Component {
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
                  {column.label}
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
