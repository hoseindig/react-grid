import React from "react";
import _ from "lodash";
class tableBody extends React.Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item);
    else return _.get(item, column.path);;
  };
  render() {
    const { pagedList, columns } = this.props;

    return (
      <React.Fragment>
        <tbody>
          {pagedList.map((item) => {
            return (
              <tr key={item._id}>
                {columns.map((column) => (
                  <td key={column.path ? column.path : column.key}>
                    {this.renderCell(item, column)}
                  </td>
                ))}
                {/* <td>{item.title}</td>
                <td>{item.genre.name}</td>
                <td>{item.numberInStock}</td>
                <td>{item.dailyRentalRate}</td>
                <td>
                  <Like movie={item} onClick={() => handelLike(item)} />
                </td>
                <td>
                  <button
                    onClick={() => handelDelete(item._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </React.Fragment>
    );
  }
}

export default tableBody;
