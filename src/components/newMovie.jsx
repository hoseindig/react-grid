import React from "react";
import Form from "./form";
import Joi from "joi-browser";
import { v4 as uuidv4 } from "uuid";
import { getGenres } from "../services/fakeGenreService";
class NewMovie extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genreList: getGenres(),
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("عنوان"),
    genre: Joi.string().required().label("ژانر"),
    numberInStock: Joi.number()
      .min(1)
      .max(1000)
      .positive()
      .required()
      .label("تعداد"),
    dailyRentalRate: Joi.number()
      .min(0)
      .max(10)
      .positive()
      .required()
      .label("امتیاز"),
  };

  doSubmit = () => {
    console.log("doSubmit");
    const { data } = this.state;
    data._id = uuidv4();
    this.props.history.push({ pathname: "/moveies", movie: data });
  };
  render() {
    return (
      <div>
        <h1>New Movie </h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {/* {this.renderInput("genre", "Gennre")} */}

          <div className="form-group">
            <label>Gennre {this.state.data.genre}</label>
            <select
              value={this.state.data.genre}
              className="form-control"
              name="genre"
              onChange={this.handleChange}
            >
              {this.state.genreList.map((item) => {
                return (
                  <option key={item._id} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          {this.renderInput("numberInStock", "number In Stuck")}
          {this.renderInput("dailyRentalRate", "Rate")}

          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovie;
