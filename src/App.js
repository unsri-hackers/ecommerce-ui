import React from "react";
import { Router } from "@reach/router";
import { Dummy, Home, Login } from "./pages";
import Layout from "./components/layout/Layout";
import { Helmet } from "react-helmet";

const PrivateRoute = ({ render, ...props }) => {
  // TODO: Authentication logic goes here.
  return render(props);
};

const App = () => {
  return (
    <>
      <Helmet defaultTitle="Deuvox" titleTemplate="%s | Deuvox">
        <meta name="description" content="Deuvox is the best" />
        <meta charSet="utf-8" />
      </Helmet>
      <Router>
        <Login path="/login" />

        <Dummy path="/-/dummy" />

        <PrivateRoute path="/" render={Layout(Home)} />
      </Router>
    </>
  );
};

export default App;
