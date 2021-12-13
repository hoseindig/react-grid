import React from "react";
import { getMovies, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Joi from "joi-browser";

import Form from "./form";

class MovieInfo extends Form {
  state = {
    movieList: [],
    movieSelected: {},
    data: {
      title: "",
      _id: "1",
      genre: {},
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };
  schema = {
    _id: Joi.string(),
    genreId: Joi.string(),
    title: Joi.string().required().label("عنوان"),
    genre: {
      name: Joi.string(),
      _id: Joi.string(),
    },
    liked: Joi.boolean(),
    publishDate: Joi.string(),
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

  handleChangeGenre = ({ currentTarget: input }) => {
    // debugger
    const data = { ...this.state.data };
    const { genres } = this.state;
    data[input.name] = input.value;
    data.genre.name = genres.find((g) => g._id === input.value).name;

    this.setState({ data });
  };

  doSubmit = () => {
    const { data } = this.state;
    data.genre._id = data.genreId;
    saveMovie(data);
    console.log("doSubmit", data);

    this.props.history.push({ pathname: "/moveies" }); //, movie: data
  };

  findMovie = (movies, id) => {
    const find = movies.filter((m) => m._id === id);
    const itemFind = find[0];
    if (itemFind) {
      console.log("findMoviei", itemFind);
      return itemFind;
    } else this.props.history.push("/moveies");
  };
  componentDidMount() {
    const movies = getMovies();
    const genres = getGenres();
    const { id } = this.props.match.params;

    this.setState({ movieList: movies, genres });
    if (!id) return;

    let data = this.findMovie(movies, id);
    if (data) {
      data.genreId = data.genre._id;
      
      this.setState({ data });
    }
    else
    console.log("c%error","background:red");
  }

  handleSubmit = () => {
    this.doSubmit();
  };

  renderHeader = () => {
    if (this.props.match.params.id) return <h1>Edit Movie </h1>;
    else return <h1>New Movie </h1>;
  };

  render() {
    return (
      <div>
        {this.renderHeader()}
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderCombo(
            "Gennre",
            "genreId",
            this.state.data.genreId,
            this.handleChangeGenre,
            this.state.genres
          )}

          {this.renderInput("numberInStock", "number In Stuck")}
          {this.renderInput("dailyRentalRate", "Rate")}

          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieInfo;
