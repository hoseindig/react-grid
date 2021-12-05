import React from "react";
class listGroup extends React.Component {
  render() {
    const {
      genres,
      handleClickGenres,
      genresSeleted,
      textProperty,
      valueProperty,
    } = this.props;
    console.log("genresSeleted", genresSeleted);
    return (
      <div>
        <ul className="list-group ">
          <li
            onClick={() => handleClickGenres(null)}
            className={ !genresSeleted ? "list-group-item genres active" : "list-group-item genres"}
          >
            All
          </li>
          {genres.map((item) => {
            return (
              <li
                key={item[valueProperty]}
                onClick={() => handleClickGenres(item)}
                className={ item=== genresSeleted ? "list-group-item genres active" : "list-group-item genres"}
              >
                {item[textProperty]}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
listGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default listGroup;
