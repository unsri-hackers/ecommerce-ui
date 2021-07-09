import React, { useMemo } from "react";
import { navigate, Router, Location, LocationProvider } from "@reach/router";
import { useSize } from "ahooks";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import Layout from "./components/layout/Layout";
import { Dummy, ListProduct, Login, StartedPage, Upload } from "./pages";
import SiteContext from "./providers/site/SiteContext";
import useAuth, { AuthProvider } from "./providers/auth/context";

const PrivateRoute = ({ render, ...props }) => {
  const { auth } = useAuth();
  if (auth && auth.token === "") {
    navigate("/login");
  }
  return render(props);
};

ReactGA.initialize("UA-198873805-1", {
  testMode: process.env.NODE_ENV === "test",
});

const trackPageView = (location) => {
  ReactGA.pageview(location.pathname + location.search);
};

const RESPONSIVE_MOBILE_WIDTH = 768;

const App = () => {
  const dom = document.querySelector("body");
  const size = useSize(dom);

  const isMobile = useMemo(
    () => size.width < RESPONSIVE_MOBILE_WIDTH,
    [size.width]
  );

  return (
    <AuthProvider>
      <SiteContext.Provider value={{ isMobile }}>
        <LocationProvider>
          <Helmet defaultTitle="Deuvox" titleTemplate="%s | Deuvox">
            <meta name="description" content="Deuvox is the best" />
            <meta charSet="utf-8" />
          </Helmet>
          <Router>
            <Login path="/login" />
            <Dummy path="/-/dummy" />
            <PrivateRoute path="/products/upload" render={Layout(Upload)} />
            <PrivateRoute path="/products" render={Layout(ListProduct)} />
            <PrivateRoute path="/" render={Layout(StartedPage)} />
          </Router>
          <Location children={(context) => trackPageView(context.location)} />
        </LocationProvider>
      </SiteContext.Provider>
    </AuthProvider>
  );
};

export default App;
