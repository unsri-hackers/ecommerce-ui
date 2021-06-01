import React from "react";
import { Home, Login } from "./pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Layout>
            <Route path="/" component={Home} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
