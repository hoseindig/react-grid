import React from "react";
class like extends React.Component {
  render() {
    let classes = " like fa fa-heart";
    if (!this.props.movie.like) classes += "-o";
    return (
      <React.Fragment>
        <i className={classes} aria-hidden="true" onClick={()=>this.props.onClick()}></i>
      </React.Fragment>
    );
  }
}

export default like;
