import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Moveis from "./components/moveies";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import MovieInfo from "./components/table/movieInfo";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from './components/loginForm';

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";


function App() {
  return (
    <React.Fragment> 
      <NavBar />
      <main className="container">
        <Switch>
          
          <Route path="/Login" component={LoginForm} />
          <Route path="/moveies" component={Moveis} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/customers" component={Customers} />
          <Route path="/movieInfo/:id" component={MovieInfo} />

          <Route path="/notFound" component={NotFound}></Route>

          <Redirect from="/" exact to="/moveies" />
          <Redirect  to="/notFound" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
