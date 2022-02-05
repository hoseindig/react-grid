import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Moveis from "./components/moveies";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import MovieInfo from "./components/movieInfo";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import Register from "./components/register";
import NewMovie from "./components/newMovie";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer  position="bottom-right" />
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies/new" component={MovieInfo} />
          <Route path="/register" component={Register} />
          <Route path="/Login" component={LoginForm} />
          <Route path="/moveies" component={Moveis} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/customers" component={Customers} />
          <Route path="/movieInfo/:id" component={MovieInfo} />

          <Route path="/notFound" component={NotFound}></Route>

          <Redirect from="/" exact to="/moveies" />
          <Redirect to="/notFound" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
