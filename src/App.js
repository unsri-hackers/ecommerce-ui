import React from "react";
import { navigate, Router } from "@reach/router";
import { Dummy, Home, Login } from "./pages";
import Layout from "./components/layout/Layout";
import useAuth, { AuthProvider } from "./providers/auth/context";

const PrivateRoute = ({ render, ...props }) => {
  const { user } = useAuth();
  if (!user) {
    navigate("/login");
  }
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
