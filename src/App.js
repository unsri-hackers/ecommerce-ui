import React, { useMemo } from "react";
import { Router, Location, LocationProvider } from "@reach/router";
// import { Dummy, Home, Login, StartedPage, ProductCategories } from "./pages";
// import Layout from "./components/layout/Layout";
import { useSize } from "ahooks";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import Layout from "./components/layout/Layout";
import { Dummy, Home, Login, StartedPage, ProductCategories } from "./pages";
import SiteContext from "./providers/site/SiteContext";


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

const RESPONSIVE_MOBILE_WIDTH = 768;

const App = () => {
  const dom = document.querySelector("body");
  const size = useSize(dom);

//         <PrivateRoute path="/" render={Layout(ProductCategories)} />

//         <PrivateRoute path="/" render={Layout(StartedPage)} />

  const isMobile = useMemo(
    () => size.width < RESPONSIVE_MOBILE_WIDTH,
    [size.width]
  );

  return (
    <SiteContext.Provider value={{ isMobile }}>
      <LocationProvider>
        <Helmet defaultTitle="Deuvox" titleTemplate="%s | Deuvox">
          <meta name="description" content="Deuvox is the best" />
          <meta charSet="utf-8" />
        </Helmet>
        <Router>
          <Login path="/login" />

          <Dummy path="/-/dummy" />
            
          <PrivateRoute path="/" render={Layout(ProductCategories)} />

          <PrivateRoute path="/" render={Layout(StartedPage)} />

          <PrivateRoute path="/" render={Layout(Home)} />
        </Router>
        <Location children={(context) => trackPageView(context.location)} />
      </LocationProvider>
    </SiteContext.Provider>
  );
};

export default App;
