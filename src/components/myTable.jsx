import React from "react";
import Like from "./like";
class MyTable extends React.Component {
  render() {
    const { handelLike, handelDelete, theads, onSort, pagedList } = this.props;

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              {theads.map((head) => {
                return <th key={head} className="tHead" onClick={() => onSort(head)}>{head}</th>;
              })}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {pagedList.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like movie={movie} onClick={() => handelLike(movie)} />
                  </td>
                  <td>
                    <button
                      onClick={() => handelDelete(movie._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyTable;
