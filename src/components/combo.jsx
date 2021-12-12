import React from "react";
class Combo extends React.Component {
  render() {
    const { label, name, value, onChange,options } = this.props;
    return (
      <div className="form-group">
        <label>{label} </label>
        <select
          value={value}
          className="form-control"
          name={name}
          onChange={onChange}
        >
          <option value=""></option>
          {options.map((item) => {
            return (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default Combo;
