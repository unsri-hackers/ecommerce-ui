import React from "react";
import { Router, Location, LocationProvider } from "@reach/router";
import { Dummy, Home, Login } from "./pages";
import Layout from "./components/layout/Layout";
import ReactGA from "react-ga";

const PrivateRoute = ({ render, ...props }) => {
  // TODO: Authentication logic goes here.
  return render(props);
};

ReactGA.initialize("UA-198873805-1", {
  testMode: process.env.NODE_ENV === "test",
});

const trackPageView = (location) => {
  ReactGA.pageview(location.pathname + location.search);
};

const App = () => {
  return (
    <LocationProvider>
      <Router>
        <Login path="/login" />

        <Dummy path="/-/dummy" />

        <PrivateRoute path="/" render={Layout(Home)} />
      </Router>
      <Location children={(context) => trackPageView(context.location)} />
    </LocationProvider>
  );
};

export default App;
