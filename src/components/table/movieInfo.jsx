import React  from "react";
class MovieInfo extends React.Component {
  handleSave = () => {
    this.props.history.push("/moveies");
  };
  render() {
    const { match } = this.props;
    return (
      <div>
        <h4>Movie Info</h4>
        <br />

        <p>Movie Name : {match.params.name}</p>
        <p>
          Movie Id : <b>{match.params.id}</b>{" "}
        </p>
        <button className="btn btn-success" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}

export default MovieInfo;
