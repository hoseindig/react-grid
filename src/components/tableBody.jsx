import React, { Component } from "react";
import Like from "./like";

class tableBody extends React.Component {
  render() {
    const { handelLike, handelDelete, theads, onSort, pagedList } = this.props;

    return (
      <React.Fragment>
        <tbody>
          {pagedList.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.title}</td>
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
                </td>
              </tr>
            );
          })}
        </tbody>
      </React.Fragment>
    );
  }
}

export default tableBody;
