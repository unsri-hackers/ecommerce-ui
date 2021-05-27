import React from "react";
import { Router } from "@reach/router";
import { Layout } from "antd";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Home, Login } from "./pages";

const { Content } = Layout;

const App = () => {
  return (
    <>
      <Header />

      <Content>
        <Router>
          <Home path="/" />
          <Login path="/login" />
        </Router>
      </Content>

      <Footer />
    </>
  );
};

export default App;
