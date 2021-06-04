import React from "react";
import { Home, Login } from "./pages";
import Layout from "./components/layout/Layout";
import { Router } from "@reach/router";

const App = () => {
  return (
    <Router>
      <Login path="/login" />
      <Layout path="/">
        <Home path="/" />
      </Layout>
    </Router>
  );
};

export default App;