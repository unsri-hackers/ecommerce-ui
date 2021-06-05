import React from "react";
import { Router } from "@reach/router";
import { Dummy, Home, Login, StartedPage } from "./pages";
import Layout from "./components/layout/Layout";

const PrivateRoute = ({ render, ...props }) => {
  // TODO: Authentication logic goes here.
  return render(props);
};

const App = () => {
  return (
    <Router> 
      <Login path="/login" />

      <Dummy path="/-/dummy" />

      <PrivateRoute path="/" render={Layout(StartedPage)} />

      <PrivateRoute path="/" render={Layout(Home)} />
    </Router>
  );
};

export default App;
