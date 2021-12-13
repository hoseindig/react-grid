import React from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

import List from "./list";
import ListGroup from "./listGroup";

class Movies extends React.Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    genresSeleted: null,
    filterd: getMovies(),
    activePage: 1,
    theads: ["Title", "Genre", "Stock", "Rate", "Like"],
    passParams: {},
  };

  componentDidMount() {
    if (this.props.location.movie) {
      // debugger;

      const movie = this.props.location.movie;

      let movies = this.state.movies;

      let index = movies.findIndex((m) => m._id === movie._id);
      //update
      if (index !== -1) movies[index] = movie;
      else movies.push(this.props.location.movie);

      console.log("get movie", movie, index);

      this.setState({ movies });
    }
  }

  handelDelete = (id) => {
    console.log("%chandelDelete : ", "background:red", id);
    deleteMovie(id);
    let filterd = getMovies(); // this.state.filterd.filter((m) => m._id !== id);
    this.setState({ filterd });
  };
  handelLike = (movie, id, val) => {
    console.log("%chandelLike : ", "background:green", movie);
    const movies = this.state.filterd;
    const index = movies.indexOf(movie);
    try {
      // debugger;
      if (movies[index].like) movies[index].like = !movies[index].like;
      else movies[index].like = true;
      // movies[index].like =
      //   !movies[index].like || movie[index].like === false ? true : false;
      this.setState({ movies });
    } catch (e) {
      console.log(movie, index, e);
    }
  };

  handleClickGenres = (genresSeleted) => {
    console.log("handleClickGenres", genresSeleted);
    this.setState({ genresSeleted });
    const allMovies = this.state.movies;
    const filterd = genresSeleted
      ? allMovies.filter((f) => f.genre._id === genresSeleted._id)
      : allMovies;

    this.setState({ filterd, activePage: 1 });
  };

  handlePageChange = (page) => {
    console.log("handlePageChange", page);
    this.setState({ activePage: page });
  };
  render() {
    let { genres, genresSeleted, filterd, activePage, theads } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ListGroup
              genres={genres}
              handleClickGenres={this.handleClickGenres}
              genresSeleted={genresSeleted}
            />
          </div>
          <div className="col-9">
            <List
              theads={theads}
              handelLike={this.handelLike}
              handelDelete={this.handelDelete}
              listItems={filterd}
              activePage={activePage}
              handlePageChange={this.handlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
