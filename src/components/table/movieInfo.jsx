import React from "react";
import { getMovies,saveMovie } from "../../services/fakeMovieService";
import { getGenres } from "../../services/fakeGenreService";
import Joi from "joi-browser";

import Form from "../form"; 

class MovieInfo extends Form {
  state = {
    movieList: [],
    movieSelected: {},
    data: {
      _id: "",
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

  handleSave = () => {
    this.props.history.push("/moveies");
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
    console.log("doSubmit");
    const { data } = this.state;
    data.genre._id = data.genreId;
    saveMovie(data)
    this.props.history.push({ pathname: "/moveies", movie: data });
    
  };

  findMovie = (movies, id) => {
    const find = movies.filter((m) => m._id === id);
    const itemFind = find[0];
    // debugger;
    if (itemFind) {
      console.log("findMoviei", itemFind);
      return itemFind;
    } else this.props.history.push("/moveies");
  };
  componentDidMount() {
    const movies = getMovies();
    const genres = getGenres();
    this.setState({ movieList: movies, genres });

    let data = this.findMovie(movies, this.props.match.params.id);
    // debugger
    data.genreId = data.genre._id;
    if (data) this.setState({ data });
  }

  handleSubmit = () => {
    this.doSubmit();
  };

  render() {
    return (
      <div>
        <h1>Edit Movie </h1>
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
