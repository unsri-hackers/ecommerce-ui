import React from "react";
import { Router } from "@reach/router";
import { Dummy, Home, Login } from "./pages";
import Layout from "./components/layout/Layout";
import { AuthProvider } from "./providers/auth/context";

const PrivateRoute = ({ render, ...props }) => {
  // TODO: Authentication logic goes here.
  return render(props);
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Login path="/login" />

        <Dummy path="/-/dummy" />

        <PrivateRoute path="/" render={Layout(Home)} />
      </Router>
    </AuthProvider>
  );
};

export default App;
