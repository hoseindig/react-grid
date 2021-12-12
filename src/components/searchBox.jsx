import React from "react";
import Input from "./input";
class SearchBox extends React.Component {
  render() {
    const { value, onChange, numberResult, name, label } = this.props;
    return (
      <React.Fragment>
        <Input name={name} label={label} value={value} onChange={onChange} />
        <p>#{numberResult} Number of Item in DataBase</p>
      </React.Fragment>
    );
  }
}

export default SearchBox;
