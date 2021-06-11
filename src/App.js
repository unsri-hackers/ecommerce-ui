import React from "react";
import { Router, Location, LocationProvider } from "@reach/router";
import { Dummy, Home, Login, StartedPage } from "./pages";
import Layout from "./components/layout/Layout";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";


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
      <Helmet defaultTitle="Deuvox" titleTemplate="%s | Deuvox">
        <meta name="description" content="Deuvox is the best" />
        <meta charSet="utf-8" />
      </Helmet>
      <Router>
        <Login path="/login" />

        <Dummy path="/-/dummy" />

        <PrivateRoute path="/" render={Layout(StartedPage)} />

        <PrivateRoute path="/" render={Layout(Home)} />
      </Router>
      <Location children={(context) => trackPageView(context.location)} />
    </LocationProvider>
  );
};

export default App;
